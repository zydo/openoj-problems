SELECT
  MAX(amount) AS RunnerUpSalary
FROM
  Wages
WHERE
  amount < (
    SELECT
      MAX(amount)
    FROM
      Wages
  )