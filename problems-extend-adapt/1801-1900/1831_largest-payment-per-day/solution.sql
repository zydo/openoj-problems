SELECT
  payment_id
FROM
  (
    SELECT
      payment_id,
      RANK() OVER (
        PARTITION BY
          SUBSTR(paid_at, 1, 10)
        ORDER BY
          value DESC
      ) AS rnk
    FROM
      Payments
  )
WHERE
  rnk = 1
ORDER BY
  payment_id ASC