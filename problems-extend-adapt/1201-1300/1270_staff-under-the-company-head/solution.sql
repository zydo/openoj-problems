SELECT DISTINCT
  e1.staff_id
FROM
  Staff e1
  JOIN Staff e2 ON e1.reports_to = e2.staff_id
  JOIN Staff e3 ON e2.reports_to = e3.staff_id
  JOIN Staff e4 ON e3.reports_to = e4.staff_id
WHERE
  e1.staff_id != 1
  AND e1.reports_to != e1.staff_id
  AND (
    e2.staff_id = 1
    OR e3.staff_id = 1
    OR e4.staff_id = 1
  )