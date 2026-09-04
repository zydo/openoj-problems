SELECT
  applicant_id
FROM
  Applicants
WHERE
  skill IN ('Python', 'Tableau', 'PostgreSQL')
GROUP BY
  applicant_id
HAVING
  COUNT(DISTINCT skill) = 3
ORDER BY
  applicant_id ASC