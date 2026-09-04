SELECT
  g.climber_id,
  g.wall,
  f.grade AS first_grade,
  l.grade AS latest_grade
FROM
  (
    SELECT
      climber_id,
      wall,
      MIN(session_date) AS first_date,
      MAX(session_date) AS last_date,
      COUNT(DISTINCT session_date) AS dates
    FROM
      ClimbLogs
    GROUP BY
      climber_id,
      wall
  ) g
  JOIN ClimbLogs f ON f.climber_id = g.climber_id
  AND f.wall = g.wall
  AND f.session_date = g.first_date
  JOIN ClimbLogs l ON l.climber_id = g.climber_id
  AND l.wall = g.wall
  AND l.session_date = g.last_date
WHERE
  g.dates >= 2
  AND l.grade > f.grade
ORDER BY
  g.climber_id,
  g.wall