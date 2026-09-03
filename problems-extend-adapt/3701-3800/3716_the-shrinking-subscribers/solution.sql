SELECT
  s.member_id,
  s.tier_name AS current_tier,
  s.monthly_price AS current_monthly_price,
  h.peak_monthly_price,
  CAST(
    julianday(h.last_date) - julianday(h.first_date) AS INTEGER
  ) AS days_enrolled
FROM
  plan_history s
  JOIN (
    SELECT
      member_id,
      MAX(monthly_price) AS peak_monthly_price,
      MIN(logged_on) AS first_date,
      MAX(logged_on) AS last_date,
      SUM(change_kind = 'downgrade') AS stepdowns
    FROM
      plan_history
    GROUP BY
      member_id
  ) h ON h.member_id = s.member_id
  AND h.last_date = s.logged_on
WHERE
  s.change_kind <> 'cancel'
  AND h.stepdowns >= 1
  AND 2 * s.monthly_price < h.peak_monthly_price
  AND julianday(h.last_date) - julianday(h.first_date) >= 60
ORDER BY
  days_enrolled DESC,
  s.member_id ASC