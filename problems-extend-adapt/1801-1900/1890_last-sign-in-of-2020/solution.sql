SELECT
  visitor_id,
  MAX(seen_at) AS latest_seen
FROM
  SignIns
WHERE
  seen_at >= '2020-01-01'
  AND seen_at < '2021-01-01'
GROUP BY
  visitor_id