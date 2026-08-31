SELECT
  MAX(value) AS value
FROM
  Readings
WHERE
  value IN (
    SELECT
      value
    FROM
      Readings
    GROUP BY
      value
    HAVING
      COUNT(*) = 1
  )