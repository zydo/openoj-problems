SELECT
  COUNT(DISTINCT customer_id) AS spender_count
FROM
  Receipts
WHERE
  total > 500