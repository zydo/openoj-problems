SELECT
  full_name
FROM
  Representatives
WHERE
  rep_id NOT IN (
    SELECT
      Purchases.rep_id
    FROM
      Purchases
      JOIN Clients ON Purchases.client_id = Clients.client_id
    WHERE
      Clients.client_name = 'RED'
  )