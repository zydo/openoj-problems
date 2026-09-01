SELECT
  buyer_id
FROM
  Purchases
GROUP BY
  buyer_id
HAVING
  COUNT(DISTINCT item_id) = (
    SELECT
      COUNT(*)
    FROM
      Catalog
  )