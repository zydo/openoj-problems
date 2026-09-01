SELECT
  student_id,
  course_id,
  mark
FROM
  (
    SELECT
      student_id,
      course_id,
      mark,
      ROW_NUMBER() OVER (
        PARTITION BY
          student_id
        ORDER BY
          mark DESC,
          course_id ASC
      ) AS rn
    FROM
      Coursework
  ) AS ranked
WHERE
  rn = 1
ORDER BY
  student_id