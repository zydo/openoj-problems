SELECT
  work_day AS day,
  worker_id,
  SUM(clock_out - clock_in) AS total_minutes
FROM
  Attendance
GROUP BY
  work_day,
  worker_id