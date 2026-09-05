SELECT
  item_id,
  SUM(units) AS total_units
FROM
  Orders
GROUP BY
  item_id