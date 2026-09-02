SELECT
  gig_id,
  applicant_id,
  score
FROM
  (
    SELECT
      gig_id,
      applicant_id,
      score,
      ROW_NUMBER() OVER (
        PARTITION BY
          gig_id
        ORDER BY
          score DESC,
          applicant_id
      ) AS rn
    FROM
      (
        SELECT
          p.gig_id AS gig_id,
          c.applicant_id AS applicant_id,
          100 + 10 * SUM(
            CASE
              WHEN c.level > p.demand THEN 1
              ELSE 0
            END
          ) - 5 * SUM(
            CASE
              WHEN c.level < p.demand THEN 1
              ELSE 0
            END
          ) AS score,
          COUNT(*) AS matched,
          (
            SELECT
              COUNT(*)
            FROM
              Gigs p2
            WHERE
              p2.gig_id = p.gig_id
          ) AS needed
        FROM
          Gigs p
          JOIN Applicants c ON c.skill = p.skill
        GROUP BY
          p.gig_id,
          c.applicant_id
      )
    WHERE
      matched = needed
  )
WHERE
  rn = 1
ORDER BY
  gig_id