SELECT
  student_no,
  student_name,
  student_age
FROM
  ClassRoster
WHERE
  student_name IS NOT NULL
ORDER BY
  seat ASC