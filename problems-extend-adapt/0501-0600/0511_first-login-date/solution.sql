SELECT
  player_id,
  MIN(session_date) AS first_login
FROM
  PlaySession
GROUP BY
  player_id