SELECT
  s.seed_name AS seed_name,
  SUM(c.quantity) AS packets
FROM
  Checkouts c
  JOIN Seeds s ON s.seed_id = c.seed_id
WHERE
  c.taken_on LIKE '2020-02-%'
GROUP BY
  s.seed_id,
  s.seed_name
HAVING
  SUM(c.quantity) >= 100