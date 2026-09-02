WITH
  sequenced AS (
    SELECT
      user_id,
      amount,
      purchased_at,
      ROW_NUMBER() OVER (
        PARTITION BY
          user_id
        ORDER BY
          purchased_at
      ) AS rn,
      LAG(amount, 1) OVER (
        PARTITION BY
          user_id
        ORDER BY
          purchased_at
      ) AS prev_amount_1,
      LAG(amount, 2) OVER (
        PARTITION BY
          user_id
        ORDER BY
          purchased_at
      ) AS prev_amount_2
    FROM
      Purchases
  )
SELECT
  user_id,
  amount AS third_purchase_amount,
  purchased_at AS third_purchase_date
FROM
  sequenced
WHERE
  rn = 3
  AND amount > prev_amount_1
  AND amount > prev_amount_2
ORDER BY
  user_id