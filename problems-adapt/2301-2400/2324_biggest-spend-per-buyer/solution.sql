WITH
  spent AS (
    SELECT
      s.buyer_id,
      s.item_id,
      SUM(s.quantity * p.price) AS spend
    FROM
      Purchases s,
      Goods p
    WHERE
      s.item_id = p.item_id
    GROUP BY
      s.buyer_id,
      s.item_id
  ),
  best AS (
    SELECT
      buyer_id,
      MAX(spend) AS top
    FROM
      spent
    GROUP BY
      buyer_id
  )
SELECT
  spent.buyer_id,
  spent.item_id
FROM
  spent,
  best
WHERE
  spent.buyer_id = best.buyer_id
  AND spent.spend = best.top