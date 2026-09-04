SELECT
  item_id,
  order_year AS first_year,
  units,
  unit_price
FROM
  Orders
WHERE
  (item_id, order_year) IN (
    SELECT
      item_id,
      MIN(order_year)
    FROM
      Orders
    GROUP BY
      item_id
  )