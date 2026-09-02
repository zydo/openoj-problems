SELECT DISTINCT
  shopper_id
FROM
  CheckoutLog
WHERE
  paid_at >= '2022-03-08 00:00:00'
  AND paid_at <= '2022-03-20 00:00:00'
  AND total >= 1000
ORDER BY
  shopper_id