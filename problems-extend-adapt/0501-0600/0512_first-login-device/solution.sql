SELECT
  player_id,
  device_id
FROM
  PlaySession
WHERE
  (player_id, session_date) IN (
    SELECT
      player_id,
      MIN(session_date)
    FROM
      PlaySession
    GROUP BY
      player_id
  )