WITH
  before_ranked AS (
    SELECT
      team_id,
      ROW_NUMBER() OVER (
        ORDER BY
          points DESC,
          country
      ) AS old_rank
    FROM
      Standings
  ),
  after_points AS (
    SELECT
      tp.team_id,
      tp.country,
      tp.points + pc.points_delta AS new_points
    FROM
      Standings tp
      JOIN PointAdjustments pc ON pc.team_id = tp.team_id
  ),
  after_ranked AS (
    SELECT
      team_id,
      ROW_NUMBER() OVER (
        ORDER BY
          new_points DESC,
          country
      ) AS new_rank
    FROM
      after_points
  )
SELECT
  br.team_id,
  ap.country,
  br.old_rank - ar.new_rank AS rank_swing
FROM
  before_ranked br
  JOIN after_ranked ar ON ar.team_id = br.team_id
  JOIN after_points ap ON ap.team_id = br.team_id
ORDER BY
  br.team_id