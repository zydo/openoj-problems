SELECT
  c.name AS NonBuyer
FROM
  Shoppers c
  LEFT JOIN Purchases o ON c.shopperId = o.shopperId
WHERE
  o.purchaseId IS NULL