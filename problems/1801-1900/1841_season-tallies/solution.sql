SELECT
  club_name,
  COUNT(m.points) AS games_played,
  COALESCE(SUM(m.points), 0) AS points,
  COALESCE(SUM(m.goals_for), 0) AS goals_for,
  COALESCE(SUM(m.goals_against), 0) AS goals_against,
  COALESCE(SUM(m.goals_for), 0) - COALESCE(SUM(m.goals_against), 0) AS goal_margin
FROM
  Clubs t
  LEFT JOIN (
    SELECT
      host_club_id AS club_id,
      CASE
        WHEN host_club_goals > guest_club_goals THEN 3
        WHEN host_club_goals = guest_club_goals THEN 1
        ELSE 0
      END AS points,
      host_club_goals AS goals_for,
      guest_club_goals AS goals_against
    FROM
      Fixtures
    UNION ALL
    SELECT
      guest_club_id AS club_id,
      CASE
        WHEN guest_club_goals > host_club_goals THEN 3
        WHEN guest_club_goals = host_club_goals THEN 1
        ELSE 0
      END AS points,
      guest_club_goals AS goals_for,
      host_club_goals AS goals_against
    FROM
      Fixtures
  ) AS m ON m.club_id = t.club_id
GROUP BY
  club_name
ORDER BY
  points DESC,
  goal_margin DESC,
  club_name ASC