SELECT
  v.engine_type,
  d.captain_id,
  ROUND(AVG(t.stars), 2) AS stars,
  SUM(t.miles) AS miles
FROM
  Rides t
  JOIN Fleet v ON t.car_id = v.car_id
  JOIN Captains d ON v.captain_id = d.captain_id
GROUP BY
  v.engine_type,
  d.captain_id
ORDER BY
  v.engine_type ASC,
  stars DESC,
  miles DESC,
  d.incidents ASC,
  d.captain_id ASC