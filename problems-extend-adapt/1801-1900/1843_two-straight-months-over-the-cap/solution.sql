SELECT DISTINCT
  m1.wallet_id
FROM
  (
    SELECT
      wallet_id,
      SUBSTR(day, 1, 7) AS month,
      SUM(amount) AS income
    FROM
      Movements
    WHERE
      kind = 'Creditor'
    GROUP BY
      wallet_id,
      SUBSTR(day, 1, 7)
  ) AS m1
  JOIN Wallets a ON a.wallet_id = m1.wallet_id
  JOIN (
    SELECT
      wallet_id,
      SUBSTR(day, 1, 7) AS month,
      SUM(amount) AS income
    FROM
      Movements
    WHERE
      kind = 'Creditor'
    GROUP BY
      wallet_id,
      SUBSTR(day, 1, 7)
  ) AS m2 ON m2.wallet_id = m1.wallet_id
  AND m2.month = CAST(
    CAST(SUBSTR(m1.month, 1, 4) AS INTEGER) + (CAST(SUBSTR(m1.month, 6, 2) AS INTEGER) = 12) AS TEXT
  ) || '-' || SUBSTR(
    '0' || (
      (CAST(SUBSTR(m1.month, 6, 2) AS INTEGER) % 12) + 1
    ),
    -2
  )
WHERE
  m1.income > a.income_cap
  AND m2.income > a.income_cap