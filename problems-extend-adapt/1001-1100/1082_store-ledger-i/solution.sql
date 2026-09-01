SELECT
  clerk_id
FROM
  Ledger
GROUP BY
  clerk_id
HAVING
  SUM(amount) = (
    SELECT
      MAX(total)
    FROM
      (
        SELECT
          SUM(amount) AS total
        FROM
          Ledger
        GROUP BY
          clerk_id
      )
  )