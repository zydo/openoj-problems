SELECT
  dev_id,
  COUNT(*) AS entry_count,
  ROUND(AVG(points * 1.0), 2) AS avg_points
FROM
  work_logs
GROUP BY
  dev_id
HAVING
  COUNT(*) >= 3
  AND MAX(points) > AVG(points)
ORDER BY
  avg_points DESC,
  dev_id ASC