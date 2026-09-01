SELECT
  p.item_id,
  COALESCE(
    ROUND(
      SUM(u.quantity * p.unit_price) * 1.0 / NULLIF(SUM(u.quantity), 0),
      2
    ),
    0
  ) AS avg_price
FROM
  Tariffs p
  LEFT JOIN Sales u ON u.item_id = p.item_id
  AND u.sold_on BETWEEN p.from_date AND p.to_date
GROUP BY
  p.item_id