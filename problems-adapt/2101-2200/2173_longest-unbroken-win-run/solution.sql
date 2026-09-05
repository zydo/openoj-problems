WITH
  ranked AS (
    SELECT
      player_id,
      outcome,
      ROW_NUMBER() OVER (
        PARTITION BY
          player_id
        ORDER BY
          played_on
      ) AS match_no,
      ROW_NUMBER() OVER (
        PARTITION BY
          player_id,
          outcome
        ORDER BY
          played_on
      ) AS result_no
    FROM
      Fixtures
  ),
  streaks AS (
    SELECT
      player_id,
      outcome,
      match_no - result_no AS streak_id
    FROM
      ranked
  ),
  wins AS (
    SELECT
      player_id,
      streak_id,
      COUNT(*) AS streak_length
    FROM
      streaks
    WHERE
      outcome = 'Win'
    GROUP BY
      player_id,
      streak_id
  )
SELECT
  m.player_id,
  COALESCE(MAX(w.streak_length), 0) AS best_run
FROM
  (
    SELECT DISTINCT
      player_id
    FROM
      Fixtures
  ) m
  LEFT JOIN wins w ON w.player_id = m.player_id
GROUP BY
  m.player_id