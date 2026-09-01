SELECT
  repo_id,
  COUNT(*) AS watchers_count
FROM
  Watchers
GROUP BY
  repo_id
ORDER BY
  repo_id