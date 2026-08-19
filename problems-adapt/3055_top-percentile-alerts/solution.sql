SELECT
  alert_id,
  region,
  risk_score
FROM
  (
    SELECT
      alert_id,
      region,
      risk_score,
      PERCENT_RANK() OVER (
        PARTITION BY
          region
        ORDER BY
          risk_score DESC
      ) AS pr
    FROM
      Alerts
  ) ranked
WHERE
  pr < 0.05
ORDER BY
  region ASC,
  risk_score DESC,
  alert_id ASC