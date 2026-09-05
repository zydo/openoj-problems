WITH
  ranked AS (
    SELECT
      metro_id,
      day,
      temp,
      ROW_NUMBER() OVER (
        PARTITION BY
          metro_id
        ORDER BY
          temp DESC,
          day
      ) AS rn
    FROM
      Readings
  )
SELECT
  metro_id,
  day,
  temp
FROM
  ranked
WHERE
  rn = 1
ORDER BY
  metro_id