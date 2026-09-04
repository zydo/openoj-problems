SELECT
  r.rider_id,
  r.rider_name,
  COALESCE(SUM(t.miles), 0) AS total_miles
FROM
  Riders r
  LEFT JOIN Trips t ON t.rider_id = r.rider_id
GROUP BY
  r.rider_id,
  r.rider_name
ORDER BY
  r.rider_id ASC