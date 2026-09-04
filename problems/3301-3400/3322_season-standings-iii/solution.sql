WITH
  totals AS (
    SELECT
      season_id,
      club_id,
      club_name,
      3 * won + drawn AS points,
      scored - conceded AS goal_difference
    FROM
      league_table
  )
SELECT
  season_id,
  club_id,
  club_name,
  points,
  goal_difference,
  ROW_NUMBER() OVER (
    PARTITION BY
      season_id
    ORDER BY
      points DESC,
      goal_difference DESC,
      club_name
  ) AS place
FROM
  totals
ORDER BY
  season_id,
  place,
  club_name