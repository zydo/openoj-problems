WITH
  ranked AS (
    SELECT
      applicant_id,
      level,
      monthly_pay,
      SUM(monthly_pay) OVER (
        PARTITION BY
          level
        ORDER BY
          monthly_pay,
          applicant_id ROWS BETWEEN UNBOUNDED PRECEDING
          AND CURRENT ROW
      ) AS running_pay
    FROM
      Applicants
  ),
  senior_hires AS (
    SELECT
      COUNT(*) AS hired_count,
      COALESCE(SUM(monthly_pay), 0) AS spent
    FROM
      ranked
    WHERE
      level = 'Senior'
      AND running_pay <= 70000
  ),
  junior_hires AS (
    SELECT
      COUNT(*) AS hired_count
    FROM
      ranked
      CROSS JOIN senior_hires
    WHERE
      level = 'Junior'
      AND running_pay <= 70000 - senior_hires.spent
  )
SELECT
  'Senior' AS level,
  hired_count
FROM
  senior_hires
UNION ALL
SELECT
  'Junior' AS level,
  hired_count
FROM
  junior_hires