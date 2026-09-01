SELECT
  cl.client_id,
  cl.name
FROM
  Clients cl
  JOIN Invoices iv ON iv.client_id = cl.client_id
  JOIN Merch m ON m.sku = iv.sku
GROUP BY
  cl.client_id,
  cl.name
HAVING
  SUM(
    CASE
      WHEN iv.invoice_date BETWEEN '2020-06-01' AND '2020-06-30'  THEN iv.quantity * m.price
      ELSE 0
    END
  ) >= 100
  AND SUM(
    CASE
      WHEN iv.invoice_date BETWEEN '2020-07-01' AND '2020-07-31'  THEN iv.quantity * m.price
      ELSE 0
    END
  ) >= 100