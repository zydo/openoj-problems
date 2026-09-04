WITH
  priced AS (
    SELECT
      p.order_id,
      p.item_id,
      p.quantity,
      pr.price * p.quantity AS line_price
    FROM
      Orders p
      JOIN Catalog pr ON pr.item_id = p.item_id
  ),
  totals AS (
    SELECT
      order_id,
      RANK() OVER (
        ORDER BY
          SUM(line_price) DESC,
          order_id ASC
      ) AS rnk
    FROM
      priced
    GROUP BY
      order_id
  )
SELECT
  priced.item_id,
  priced.quantity,
  priced.line_price AS price
FROM
  priced
  JOIN totals ON totals.order_id = priced.order_id
WHERE
  totals.rnk = 1