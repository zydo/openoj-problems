SELECT
  claim_id,
  region,
  risk_score
FROM
  (
    SELECT
      claim_id,
      region,
      risk_score,
      PERCENT_RANK() OVER (
        PARTITION BY
          region
        ORDER BY
          risk_score DESC
      ) AS pr
    FROM
      Claims
  ) ranked
WHERE
  pr < 0.05
ORDER BY
  region ASC,
  risk_score DESC,
  claim_id ASC