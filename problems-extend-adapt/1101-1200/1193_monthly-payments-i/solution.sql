SELECT
  strftime('%Y-%m', paid_on) AS month,
  country,
  COUNT(*) AS payment_count,
  SUM(status = 'approved') AS approved_count,
  SUM(amount) AS payment_total,
  COALESCE(
    SUM(
      CASE
        WHEN status = 'approved' THEN amount
      END
    ),
    0
  ) AS approved_total
FROM
  Payments
GROUP BY
  month,
  country