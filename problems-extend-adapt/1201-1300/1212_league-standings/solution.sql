WITH
  awards AS (
    SELECT
      home_club AS club_id,
      CASE
        WHEN home_goals > away_goals THEN 3
        WHEN home_goals = away_goals THEN 1
        ELSE 0
      END AS pts
    FROM
      Fixtures
    UNION ALL
    SELECT
      away_club AS club_id,
      CASE
        WHEN away_goals > home_goals THEN 3
        WHEN away_goals = home_goals THEN 1
        ELSE 0
      END AS pts
    FROM
      Fixtures
  )
SELECT
  t.club_id,
  t.club_name,
  COALESCE(SUM(a.pts), 0) AS points
FROM
  Clubs t
  LEFT JOIN awards a ON a.club_id = t.club_id
GROUP BY
  t.club_id,
  t.club_name
ORDER BY
  points DESC,
  t.club_id ASC