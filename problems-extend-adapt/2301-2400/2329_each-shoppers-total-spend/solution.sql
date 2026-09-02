SELECT
  s.shopper_id,
  SUM(s.quantity * p.price) AS total
FROM
  Baskets s,
  Catalog p
WHERE
  s.sku_id = p.sku_id
GROUP BY
  s.shopper_id
ORDER BY
  total DESC,
  s.shopper_id