SELECT
  s.pupil_id,
  s.pupil_name,
  sub.topic_name,
  COUNT(e.pupil_id) AS sittings_attended
FROM
  Pupils s
  CROSS JOIN Topics sub
  LEFT JOIN Sittings e ON e.pupil_id = s.pupil_id
  AND e.topic_name = sub.topic_name
GROUP BY
  s.pupil_id,
  s.pupil_name,
  sub.topic_name
ORDER BY
  s.pupil_id ASC,
  sub.topic_name ASC