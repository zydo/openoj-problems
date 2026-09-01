SELECT
  day,
  model,
  COUNT(DISTINCT seller_id) AS unique_sellers,
  COUNT(DISTINCT buyer_id) AS unique_buyers
FROM
  Showroom
GROUP BY
  day,
  model