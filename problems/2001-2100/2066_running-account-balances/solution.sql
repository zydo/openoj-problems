SELECT
  account_id,
  moved_on,
  SUM(
    CASE
      WHEN direction = 'Deposit' THEN amount
      ELSE - amount
    END
  ) OVER (
    PARTITION BY
      account_id
    ORDER BY
      moved_on ROWS BETWEEN UNBOUNDED PRECEDING
      AND CURRENT ROW
  ) AS balance
FROM
  Movements
ORDER BY
  account_id,
  moved_on