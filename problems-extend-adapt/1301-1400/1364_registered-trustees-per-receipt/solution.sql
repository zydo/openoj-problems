SELECT
  i.receipt_id,
  c.shopper_name,
  i.price,
  COALESCE(cnt.trustees_cnt, 0) AS trustees_cnt,
  COALESCE(trc.registered_trustees_cnt, 0) AS registered_trustees_cnt
FROM
  Receipts i
  JOIN Shoppers c ON c.shopper_id = i.owner_id
  LEFT JOIN (
    SELECT
      owner_id,
      COUNT(*) AS trustees_cnt
    FROM
      Trustees
    GROUP BY
      owner_id
  ) cnt ON cnt.owner_id = i.owner_id
  LEFT JOIN (
    SELECT
      co.owner_id,
      COUNT(*) AS registered_trustees_cnt
    FROM
      Trustees co
    WHERE
      EXISTS (
        SELECT
          1
        FROM
          Shoppers cu
        WHERE
          cu.email = co.trustee_email
      )
    GROUP BY
      co.owner_id
  ) trc ON trc.owner_id = i.owner_id
ORDER BY
  i.receipt_id