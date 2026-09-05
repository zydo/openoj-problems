SELECT
  staff_id,
  COUNT(DISTINCT topic_id) AS cnt
FROM
  Timetable
GROUP BY
  staff_id