SELECT
  a.account_id,
  a.holder_name,
  a.opening_balance + COALESCE(r.total, 0) - COALESCE(p.total, 0) AS balance,
  CASE
    WHEN a.opening_balance + COALESCE(r.total, 0) - COALESCE(p.total, 0) < 0 THEN 'Yes'
    ELSE 'No'
  END AS overdrawn
FROM
  Accounts a
  LEFT JOIN (
    SELECT
      payer_id,
      SUM(amount) AS total
    FROM
      Transfers
    GROUP BY
      payer_id
  ) p ON p.payer_id = a.account_id
  LEFT JOIN (
    SELECT
      payee_id,
      SUM(amount) AS total
    FROM
      Transfers
    GROUP BY
      payee_id
  ) r ON r.payee_id = a.account_id