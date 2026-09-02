SELECT DISTINCT
  p1.buyer_id AS buyer_id
FROM
  Orders p1
  JOIN Orders p2 ON p1.buyer_id = p2.buyer_id
  AND p1.order_id < p2.order_id
  AND ABS(
    CAST(
      julianday(p1.order_date) - julianday(p2.order_date) AS INTEGER
    )
  ) <= 7
ORDER BY
  buyer_id