SELECT
  member_id
FROM
  member_orders
GROUP BY
  member_id
HAVING
  SUM(order_type = 'purchase') >= 3
  AND MAX(julianday(order_date)) - MIN(julianday(order_date)) >= 30
  AND 5 * SUM(order_type = 'refund') < COUNT(*)
ORDER BY
  member_id ASC