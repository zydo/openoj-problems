SELECT
  user_id,
  session_date,
  SUM(rounds) OVER (
    PARTITION BY
      user_id
    ORDER BY
      session_date
  ) AS rounds_so_far
FROM
  PlayLog