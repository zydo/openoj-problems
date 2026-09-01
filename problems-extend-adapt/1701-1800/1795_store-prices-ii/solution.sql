SELECT
  product_id AS product_id,
  'store1' AS store,
  store1 AS price
FROM
  Inventory
WHERE
  store1 IS NOT NULL
UNION ALL
SELECT
  product_id,
  'store2',
  store2
FROM
  Inventory
WHERE
  store2 IS NOT NULL
UNION ALL
SELECT
  product_id,
  'store3',
  store3
FROM
  Inventory
WHERE
  store3 IS NOT NULL