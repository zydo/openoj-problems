SELECT
  w.firm_id AS firm_id,
  w.worker_id AS worker_id,
  w.worker_name AS worker_name,
  CAST(
    ROUND(
      w.pay * (
        1 - CASE
          WHEN t.top_pay < 1000 THEN 0.0
          WHEN t.top_pay <= 10000 THEN 0.24
          ELSE 0.49
        END
      )
    ) AS INTEGER
  ) AS pay
FROM
  Wages w
  JOIN (
    SELECT
      firm_id,
      MAX(pay) AS top_pay
    FROM
      Wages
    GROUP BY
      firm_id
  ) t ON w.firm_id = t.firm_id