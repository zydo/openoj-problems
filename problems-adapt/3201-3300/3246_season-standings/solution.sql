SELECT
  club_id,
  club_name,
  3 * won + drawn AS points,
  RANK() OVER (
    ORDER BY
      3 * won + drawn DESC
  ) AS place
FROM
  league_table
ORDER BY
  points DESC,
  club_name