SELECT
  s1.worker_id,
  COUNT(*) AS clashing_shifts
FROM
  ShiftLog s1
  JOIN ShiftLog s2 ON s1.worker_id = s2.worker_id
WHERE
  s1.clock_in < s2.clock_in
  AND s1.clock_out > s2.clock_in
GROUP BY
  s1.worker_id
ORDER BY
  s1.worker_id