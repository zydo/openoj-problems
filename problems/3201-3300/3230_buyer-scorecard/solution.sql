SELECT
  t.buyer_id,
  ROUND(SUM(t.paid), 2) AS total_paid,
  COUNT(*) AS purchase_count,
  COUNT(DISTINCT p.category) AS distinct_categories,
  ROUND(AVG(t.paid), 2) AS avg_order_value,
  (
    SELECT
      p2.category
    FROM
      purchases t2
      JOIN catalog p2 ON t2.item_id = p2.item_id
    WHERE
      t2.buyer_id = t.buyer_id
    GROUP BY
      p2.category
    ORDER BY
      COUNT(*) DESC,
      MAX(t2.bought_on) DESC
    LIMIT
      1
  ) AS top_category,
  ROUND(COUNT(*) * 10 + SUM(t.paid) / 100.0, 2) AS affinity_score
FROM
  purchases t
  JOIN catalog p ON t.item_id = p.item_id
GROUP BY
  t.buyer_id
ORDER BY
  affinity_score DESC,
  t.buyer_id ASC