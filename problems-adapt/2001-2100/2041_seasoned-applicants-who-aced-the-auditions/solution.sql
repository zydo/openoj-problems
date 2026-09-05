SELECT
  c.applicant_id
FROM
  Applicants AS c
  INNER JOIN Trials AS r ON c.audition_id = r.audition_id
WHERE
  c.experience_years >= 2
GROUP BY
  c.applicant_id
HAVING
  SUM(r.marks) > 15