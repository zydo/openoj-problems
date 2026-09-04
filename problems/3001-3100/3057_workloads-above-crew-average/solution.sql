SELECT
  p.staff_id,
  p.job_id,
  e.name AS staff_name,
  p.load AS job_load
FROM
  Assignments p,
  Staff e
WHERE
  p.staff_id = e.staff_id
  AND p.load > (
    SELECT
      AVG(p2.load)
    FROM
      Assignments p2,
      Staff e2
    WHERE
      p2.staff_id = e2.staff_id
      AND e2.crew = e.crew
  )
ORDER BY
  p.staff_id ASC,
  p.job_id ASC