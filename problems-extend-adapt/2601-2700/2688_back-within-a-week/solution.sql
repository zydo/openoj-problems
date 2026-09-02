SELECT DISTINCT
  a.shopper_id AS shopper_id
FROM
  Shoppers a
  JOIN Shoppers b ON a.shopper_id = b.shopper_id
  AND b.rowid > a.rowid
WHERE
  ABS(julianday(a.bought_on) - julianday(b.bought_on)) <= 7