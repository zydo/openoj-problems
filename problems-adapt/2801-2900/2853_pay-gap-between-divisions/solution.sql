SELECT
  ABS(
    MAX(
      CASE
        WHEN division = 'Engineering' THEN pay
      END
    ) - MAX(
      CASE
        WHEN division = 'Marketing' THEN pay
      END
    )
  ) AS pay_gap
FROM
  Payroll