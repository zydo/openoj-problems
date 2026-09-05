SELECT
  strftime('%Y-%m', gig_date) AS month,
  COUNT(gig_id) AS gig_count,
  COUNT(DISTINCT client_id) AS client_count
FROM
  Gigs
WHERE
  fee > 20
GROUP BY
  month