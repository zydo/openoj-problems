WITH
  team AS (
    SELECT
      SUBSTR(pay_date, 1, 7) AS pay_month,
      team_id,
      AVG(amount) AS team_average
    FROM
      Paycheck
      JOIN Worker ON Paycheck.worker_id = Worker.worker_id
    GROUP BY
      pay_month,
      team_id
  ),
  company AS (
    SELECT
      SUBSTR(pay_date, 1, 7) AS pay_month,
      AVG(amount) AS company_average
    FROM
      Paycheck
    GROUP BY
      pay_month
  )
SELECT
  REPLACE(t.pay_month, '/', '-') AS pay_month,
  t.team_id,
  CASE
    WHEN t.team_average > c.company_average THEN 'higher'
    WHEN t.team_average < c.company_average THEN 'lower'
    ELSE 'same'
  END AS comparison
FROM
  team t
  JOIN company c ON t.pay_month = c.pay_month