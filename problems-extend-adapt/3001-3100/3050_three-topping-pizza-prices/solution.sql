SELECT
  a.item || ',' || b.item || ',' || c.item AS pizza,
  ROUND(a.price + b.price + c.price, 2) AS total_price
FROM
  Menu a,
  Menu b,
  Menu c
WHERE
  b.item > a.item
  AND c.item > b.item
ORDER BY
  total_price DESC,
  pizza ASC