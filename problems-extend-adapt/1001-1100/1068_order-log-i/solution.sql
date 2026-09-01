SELECT
  item_name,
  order_year,
  unit_price
FROM
  Orders
  JOIN Items ON Orders.item_id = Items.item_id