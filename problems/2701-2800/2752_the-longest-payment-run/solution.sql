WITH
  ordered AS (
    SELECT
      payer_id,
      julianday(paid_on) AS day_number,
      LAG(julianday(paid_on)) OVER (
        PARTITION BY
          payer_id
        ORDER BY
          paid_on
      ) AS previous_day_number
    FROM
      Payments
  ),
  marked AS (
    SELECT
      payer_id,
      day_number,
      CASE
        WHEN day_number - previous_day_number = 1 THEN 0
        ELSE 1
      END AS new_island
    FROM
      ordered
  ),
  islands AS (
    SELECT
      payer_id,
      SUM(new_island) OVER (
        PARTITION BY
          payer_id
        ORDER BY
          day_number
      ) AS island_id
    FROM
      marked
  ),
  streaks AS (
    SELECT
      payer_id,
      COUNT(*) AS streak
    FROM
      islands
    GROUP BY
      payer_id,
      island_id
  ),
  best AS (
    SELECT
      payer_id,
      MAX(streak) AS longest_streak
    FROM
      streaks
    GROUP BY
      payer_id
  )
SELECT
  payer_id
FROM
  best
WHERE
  longest_streak = (
    SELECT
      MAX(longest_streak)
    FROM
      best
  )
ORDER BY
  payer_id ASC