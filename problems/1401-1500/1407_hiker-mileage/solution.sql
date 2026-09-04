SELECT
  h.name AS name,
  COALESCE(SUM(t.distance), 0) AS total_distance
FROM
  Hikers h
  LEFT JOIN Treks t ON h.id = t.hiker_id
GROUP BY
  h.id,
  h.name
ORDER BY
  total_distance DESC,
  name ASC