SELECT
  handle,
  email
FROM
  Players
WHERE
  player_id IN (
    SELECT
      player_id
    FROM
      (
        SELECT
          player_id,
          match_id - ROW_NUMBER() OVER (
            PARTITION BY
              player_id
            ORDER BY
              match_id
          ) AS grp
        FROM
          (
            SELECT
              match_id,
              champion AS player_id
            FROM
              Matches
            UNION
            SELECT
              match_id,
              runner_up
            FROM
              Matches
            UNION
            SELECT
              match_id,
              third_place
            FROM
              Matches
          )
      )
    GROUP BY
      player_id,
      grp
    HAVING
      COUNT(*) >= 3
  )
  OR player_id IN (
    SELECT
      champion
    FROM
      Matches
    GROUP BY
      champion
    HAVING
      COUNT(DISTINCT match_id) >= 3
  )