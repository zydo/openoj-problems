WITH
  ranked AS (
    SELECT
      nursery_id,
      plant_name,
      quantity,
      price,
      ROW_NUMBER() OVER (
        PARTITION BY
          nursery_id
        ORDER BY
          price DESC,
          stock_id
      ) AS exp_rank,
      ROW_NUMBER() OVER (
        PARTITION BY
          nursery_id
        ORDER BY
          price ASC,
          stock_id
      ) AS cheap_rank,
      COUNT(*) OVER (
        PARTITION BY
          nursery_id
      ) AS product_count
    FROM
      stock
  )
SELECT
  st.nursery_id,
  st.nursery_name,
  st.city,
  e.plant_name AS priciest_plant,
  c.plant_name AS cheapest_plant,
  ROUND(c.quantity * 1.0 / e.quantity, 2) AS stock_skew
FROM
  nurseries st
  JOIN ranked e ON e.nursery_id = st.nursery_id
  AND e.exp_rank = 1
  JOIN ranked c ON c.nursery_id = st.nursery_id
  AND c.cheap_rank = 1
WHERE
  e.quantity < c.quantity
  AND e.product_count >= 3
ORDER BY
  stock_skew DESC,
  st.nursery_name ASC