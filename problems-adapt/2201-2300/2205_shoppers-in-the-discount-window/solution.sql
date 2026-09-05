SELECT
  COUNT(DISTINCT shopper_id) AS shopper_cnt
FROM
  CheckoutLog
WHERE
  paid_at >= '2022-03-08 00:00:00'
  AND paid_at <= '2022-03-20 00:00:00'
  AND total >= 1000