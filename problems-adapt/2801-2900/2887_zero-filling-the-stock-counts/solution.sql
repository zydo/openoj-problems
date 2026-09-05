SELECT
  item_name,
  COALESCE(stock_count, 0) AS stock_count,
  unit_price
FROM
  Stockroom
ORDER BY
  row_no ASC