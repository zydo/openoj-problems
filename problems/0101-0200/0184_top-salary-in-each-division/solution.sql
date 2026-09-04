SELECT
  d.divisionName AS Division,
  e.name AS Engineer,
  e.salary AS Pay
FROM
  Engineers e
  JOIN (
    SELECT
      divisionId,
      MAX(salary) AS ms
    FROM
      Engineers
    GROUP BY
      divisionId
  ) m ON e.divisionId = m.divisionId
  AND e.salary = m.ms
  JOIN Divisions d ON e.divisionId = d.divisionId