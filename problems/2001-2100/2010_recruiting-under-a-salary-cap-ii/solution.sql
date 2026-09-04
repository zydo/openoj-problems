WITH
  ranked AS (
    SELECT
      applicant_id,
      level,
      SUM(monthly_pay) OVER (
        PARTITION BY
          level
        ORDER BY
          monthly_pay ROWS BETWEEN UNBOUNDED PRECEDING
          AND CURRENT ROW
      ) AS running_pay
    FROM
      Applicants
  ),
  senior_budget AS (
    SELECT
      COALESCE(MAX(running_pay), 0) AS spent
    FROM
      ranked
    WHERE
      level = 'Senior'
      AND running_pay <= 70000
  )
SELECT
  applicant_id
FROM
  ranked
  CROSS JOIN senior_budget
WHERE
  (
    level = 'Senior'
    AND running_pay <= 70000
  )
  OR (
    level = 'Junior'
    AND running_pay <= 70000 - senior_budget.spent
  )