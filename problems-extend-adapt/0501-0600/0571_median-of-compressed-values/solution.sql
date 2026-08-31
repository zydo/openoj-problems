WITH
  running AS (
    SELECT
      value,
      SUM(count) OVER (
        ORDER BY
          value
      ) AS upto,
      SUM(count) OVER () AS total
    FROM
      ValueTally
  )
SELECT
  ROUND(
    (
      MIN(
        CASE
          WHEN upto >= (total + 1) / 2 THEN value
        END
      ) + MIN(
        CASE
          WHEN upto >= (total + 2) / 2 THEN value
        END
      )
    ) / 2.0,
    1
  ) AS median
FROM
  running