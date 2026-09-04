SELECT
  'Low Salary' AS band,
  COUNT(
    CASE
      WHEN monthly_income < 20000 THEN 1
    END
  ) AS wallet_count
FROM
  Wallets
UNION ALL
SELECT
  'Average Salary' AS band,
  COUNT(
    CASE
      WHEN monthly_income BETWEEN 20000 AND 50000  THEN 1
    END
  ) AS wallet_count
FROM
  Wallets
UNION ALL
SELECT
  'High Salary' AS band,
  COUNT(
    CASE
      WHEN monthly_income > 50000 THEN 1
    END
  ) AS wallet_count
FROM
  Wallets