SELECT
  s.machine_id,
  ROUND(AVG(e.moment - s.moment), 3) AS avg_seconds
FROM
  Jobs s
  JOIN Jobs e ON s.machine_id = e.machine_id
  AND s.job_id = e.job_id
  AND e.phase = 'end'
WHERE
  s.phase = 'start'
GROUP BY
  s.machine_id