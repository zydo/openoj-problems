SELECT
  s.campus_id,
  COALESCE(MIN(e.points), -1) AS points
FROM
  Campuses s
  LEFT JOIN ScoreReport e ON e.achievers <= s.seats
GROUP BY
  s.campus_id