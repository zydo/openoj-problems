WITH
  running AS (
    SELECT
      rider_name,
      slot,
      SUM(weight) OVER (
        ORDER BY
          slot
      ) AS total
    FROM
      Riders
  )
SELECT
  rider_name
FROM
  running
WHERE
  total <= 1000
ORDER BY
  slot DESC
LIMIT
  1