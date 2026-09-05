SELECT
  faculty_name,
  COUNT(student_id) AS student_number
FROM
  Faculty
  LEFT JOIN Pupil ON Faculty.faculty_id = Pupil.faculty_id
GROUP BY
  faculty_name
ORDER BY
  student_number DESC,
  faculty_name