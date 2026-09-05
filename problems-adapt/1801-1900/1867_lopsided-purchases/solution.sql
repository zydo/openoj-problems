SELECT
  s.purchase_id
FROM
  (
    SELECT
      purchase_id,
      MAX(units) AS max_units
    FROM
      Purchases
    GROUP BY
      purchase_id
  ) AS s
  CROSS JOIN (
    SELECT
      purchase_id AS j_purchase_id,
      SUM(units) AS total_units,
      COUNT(*) AS item_count
    FROM
      Purchases
    GROUP BY
      purchase_id
  ) AS a
GROUP BY
  s.purchase_id,
  s.max_units
HAVING
  MIN(s.max_units * a.item_count - a.total_units) > 0
ORDER BY
  s.purchase_id ASC