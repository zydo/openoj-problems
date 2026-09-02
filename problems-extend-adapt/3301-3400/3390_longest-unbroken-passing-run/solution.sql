SELECT
  squad.club,
  COALESCE(MAX(runs.streak_len), 0) AS longest_streak
FROM
  roster squad
  LEFT JOIN (
    SELECT
      club,
      COUNT(*) OVER (
        PARTITION BY
          club,
          fail_cnt
      ) AS streak_len
    FROM
      (
        SELECT
          f.club AS club,
          CASE
            WHEN r.club = f.club THEN 1
            ELSE 0
          END AS ok,
          SUM(
            CASE
              WHEN r.club = f.club THEN 0
              ELSE 1
            END
          ) OVER (
            PARTITION BY
              f.club
            ORDER BY
              p.clock,
              p.from_player,
              p.to_player ROWS UNBOUNDED PRECEDING
          ) AS fail_cnt
        FROM
          pass_log p
          JOIN roster f ON f.player_id = p.from_player
          JOIN roster r ON r.player_id = p.to_player
      )
    WHERE
      ok = 1
  ) runs ON runs.club = squad.club
GROUP BY
  squad.club
ORDER BY
  squad.club