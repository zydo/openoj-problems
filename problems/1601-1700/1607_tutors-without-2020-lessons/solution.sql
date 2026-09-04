SELECT
  tutor_name
FROM
  Tutor
WHERE
  tutor_id NOT IN (
    SELECT
      tutor_id
    FROM
      Lessons
    WHERE
      strftime('%Y', lesson_date) = '2020'
  )
ORDER BY
  tutor_name