WITH RECURSIVE
  sub AS (
    SELECT
      staff_id,
      staff_name,
      pay,
      pay AS ceo_salary,
      0 AS depth
    FROM
      staff
    WHERE
      reports_to IS NULL
    UNION ALL
    SELECT
      e.staff_id,
      e.staff_name,
      e.pay,
      s.ceo_salary,
      s.depth + 1
    FROM
      staff e
      JOIN sub s ON e.reports_to = s.staff_id
  )
SELECT
  staff_id AS report_id,
  staff_name AS report_name,
  depth,
  pay - ceo_salary AS pay_gap
FROM
  sub
WHERE
  depth > 0
ORDER BY
  depth,
  report_id