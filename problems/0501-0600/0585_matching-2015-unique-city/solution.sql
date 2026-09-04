WITH
  shared_2015 AS (
    SELECT
      total_2015
    FROM
      Policy
    GROUP BY
      total_2015
    HAVING
      COUNT(*) > 1
  ),
  unique_city AS (
    SELECT
      latitude,
      longitude
    FROM
      Policy
    GROUP BY
      latitude,
      longitude
    HAVING
      COUNT(*) = 1
  )
SELECT
  ROUND(SUM(p.total_2016), 2) AS total_2016
FROM
  Policy p
  JOIN shared_2015 s ON p.total_2015 = s.total_2015
  JOIN unique_city u ON p.latitude = u.latitude
  AND p.longitude = u.longitude