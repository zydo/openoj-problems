WITH
  marked AS (
    SELECT
      payer_id,
      paid_on,
      total,
      LAG(paid_on) OVER (
        PARTITION BY
          payer_id
        ORDER BY
          paid_on
      ) AS prev_date,
      LAG(total) OVER (
        PARTITION BY
          payer_id
        ORDER BY
          paid_on
      ) AS prev_total
    FROM
      Payments
  ),
  islands AS (
    SELECT
      payer_id,
      paid_on,
      SUM(
        CASE
          WHEN paid_on = date(prev_date, '+1 day')
          AND total > prev_total THEN 0
          ELSE 1
        END
      ) OVER (
        PARTITION BY
          payer_id
        ORDER BY
          paid_on
      ) AS period_id
    FROM
      marked
  )
SELECT
  payer_id,
  MIN(paid_on) AS streak_start,
  MAX(paid_on) AS streak_end
FROM
  islands
GROUP BY
  payer_id,
  period_id
HAVING
  COUNT(*) >= 3
ORDER BY
  payer_id,
  streak_start,
  streak_end