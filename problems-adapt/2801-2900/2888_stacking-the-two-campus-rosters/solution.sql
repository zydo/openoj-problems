SELECT
  student_no,
  student_name,
  student_age
FROM
  (
    SELECT
      1 AS part,
      student_no,
      student_name,
      student_age
    FROM
      CampusEast
    UNION ALL
    SELECT
      2 AS part,
      student_no,
      student_name,
      student_age
    FROM
      CampusWest
  )
ORDER BY
  part ASC,
  student_no ASC