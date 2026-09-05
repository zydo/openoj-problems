SELECT
  t.borrower_id,
  t.tool_id,
  p.tool_name
FROM
  (
    SELECT
      borrower_id,
      tool_id,
      COUNT(*) AS loan_count
    FROM
      Loans
    GROUP BY
      borrower_id,
      tool_id
  ) t
  JOIN Tools p ON p.tool_id = t.tool_id
WHERE
  t.loan_count = (
    SELECT
      MAX(t2.loan_count)
    FROM
      (
        SELECT
          tool_id,
          COUNT(*) AS loan_count
        FROM
          Loans
        WHERE
          borrower_id = t.borrower_id
        GROUP BY
          tool_id
      ) t2
  )