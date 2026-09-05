SELECT
  m.member_id,
  m.name,
  COUNT(*) AS mentees_count,
  CAST(ROUND(AVG(t.age)) AS INTEGER) AS average_age
FROM
  Mentors m
  JOIN Mentors t ON t.mentored_by = m.member_id
GROUP BY
  m.member_id,
  m.name
ORDER BY
  m.member_id