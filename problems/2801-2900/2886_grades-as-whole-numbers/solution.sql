SELECT
  pupil_no,
  pupil_name,
  pupil_age,
  CAST(score AS INTEGER) AS score
FROM
  ScoreSheet
ORDER BY
  row_no ASC