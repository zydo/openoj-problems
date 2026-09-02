WITH RECURSIVE
  days (d) AS (
    SELECT
      DATE('2023-11-01')
    UNION ALL
    SELECT
      DATE(d, '+1 day')
    FROM
      days
    WHERE
      d < DATE('2023-11-30')
  ),
  fridays (w, d) AS (
    SELECT
      (CAST(STRFTIME('%d', d) AS INTEGER) - 1) / 7 + 1,
      d
    FROM
      days
    WHERE
      STRFTIME('%w', d) = '5'
  ),
  memberships (m) AS (
    SELECT
      'Premium'
    UNION
    SELECT
      'VIP'
  ),
  friday_spend (d, m, s) AS (
    SELECT
      p.spend_date,
      mb.tier,
      SUM(p.spend_amount)
    FROM
      SpendLog p
      JOIN Members mb ON mb.shopper_id = p.shopper_id
    WHERE
      mb.tier IN ('Premium', 'VIP')
    GROUP BY
      p.spend_date,
      mb.tier
  )
SELECT
  f.w AS week_of_month,
  m.m AS tier,
  COALESCE(fs.s, 0) AS total_amount
FROM
  fridays f
  CROSS JOIN memberships m
  LEFT JOIN friday_spend fs ON fs.d = f.d
  AND fs.m = m.m
ORDER BY
  week_of_month,
  tier