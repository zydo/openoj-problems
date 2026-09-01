SELECT
  Site.site_id,
  ROUND(AVG(tenure_years), 2) AS average_tenure
FROM
  Site
  JOIN Worker ON Site.worker_id = Worker.worker_id
GROUP BY
  Site.site_id