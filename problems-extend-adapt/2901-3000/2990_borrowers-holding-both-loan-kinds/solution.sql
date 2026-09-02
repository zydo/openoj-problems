SELECT
  borrower_id
FROM
  CreditLines
GROUP BY
  borrower_id
HAVING
  COUNT(
    CASE
      WHEN line_kind = 'Refinance' THEN 1
    END
  ) > 0
  AND COUNT(
    CASE
      WHEN line_kind = 'Mortgage' THEN 1
    END
  ) > 0
ORDER BY
  borrower_id