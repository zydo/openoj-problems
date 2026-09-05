SELECT
  company_id
FROM
  (
    SELECT
      company_id,
      metric,
      tally,
      AVG(tally) OVER (
        PARTITION BY
          metric
      ) AS avg_tally
    FROM
      Metrics
  ) AS compared
WHERE
  tally > avg_tally
GROUP BY
  company_id
HAVING
  COUNT(*) > 1