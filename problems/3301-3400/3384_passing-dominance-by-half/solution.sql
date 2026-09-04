SELECT
  t.club,
  h.half_number,
  SUM(
    CASE
      WHEN p.to_player IS NULL THEN 0
      WHEN (
        SELECT
          club
        FROM
          roster
        WHERE
          player_id = p.to_player
      ) = t.club THEN 1
      ELSE - 1
    END
  ) AS dominance
FROM
  roster t
  CROSS JOIN (
    SELECT
      1 AS half_number
    UNION ALL
    SELECT
      2
  ) h
  LEFT JOIN pass_log p ON p.from_player = t.player_id
  AND (
    (
      h.half_number = 1
      AND p.clock <= '45:00'
    )
    OR (
      h.half_number = 2
      AND p.clock > '45:00'
    )
  )
GROUP BY
  t.club,
  h.half_number
ORDER BY
  t.club,
  h.half_number