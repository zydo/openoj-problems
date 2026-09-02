SELECT
  worker_id,
  given_name,
  surname,
  yearly_pay,
  unit_id
FROM
  (
    SELECT
      *,
      ROW_NUMBER() OVER (
        PARTITION BY
          worker_id
        ORDER BY
          CAST(yearly_pay AS INTEGER) DESC
      ) AS rn
    FROM
      Payroll
  )
WHERE
  rn = 1
ORDER BY
  worker_id