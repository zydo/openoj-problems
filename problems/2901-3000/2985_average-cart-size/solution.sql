SELECT
  ROUND(
    SUM(items_per_cart * cart_count) * 1.0 / SUM(cart_count),
    2
  ) AS mean_cart_size
FROM
  Carts