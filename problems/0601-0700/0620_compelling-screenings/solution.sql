SELECT
  screening_id,
  title,
  summary,
  score
FROM
  Screenings
WHERE
  screening_id % 2 = 1
  AND summary != 'boring'
ORDER BY
  score DESC