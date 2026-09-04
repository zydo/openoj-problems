SELECT
  c.owner,
  SUM(m.delta) AS balance
FROM
  Cards c
  JOIN Movements m ON m.card_no = c.card_no
GROUP BY
  c.card_no,
  c.owner
HAVING
  SUM(m.delta) > 10000