SELECT
  e1.name AS OutEarner
FROM
  Staff e1
  JOIN Staff e2 ON e1.reportsTo = e2.staffId
WHERE
  e1.salary > e2.salary