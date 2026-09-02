WITH
  ranked AS (
    SELECT
      club_name,
      3 * won + drawn AS points,
      RANK() OVER (
        ORDER BY
          3 * won + drawn DESC
      ) AS place,
      COUNT(*) OVER () AS club_count
    FROM
      league_table
  )
SELECT
  club_name,
  points,
  place,
  CASE
    WHEN place <= (33 * club_count + 99) / 100 THEN 'Tier 1'
    WHEN place <= (66 * club_count + 99) / 100 THEN 'Tier 2'
    ELSE 'Tier 3'
  END AS tier
FROM
  ranked
ORDER BY
  points DESC,
  club_name