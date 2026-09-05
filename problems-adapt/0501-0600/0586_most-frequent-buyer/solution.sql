SELECT
  customer_number
FROM
  Purchases
GROUP BY
  customer_number
ORDER BY
  COUNT(*) DESC
LIMIT
  1