WITH
  ranked AS (
    SELECT
      worker_id,
      unit,
      DENSE_RANK() OVER (
        PARTITION BY
          unit
        ORDER BY
          wage DESC
      ) AS rnk
    FROM
      Payroll
  )
SELECT
  worker_id,
  unit
FROM
  ranked
WHERE
  rnk = 2
ORDER BY
  worker_id