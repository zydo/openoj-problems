SELECT
  g.goods_id,
  g.goods_name
FROM
  Goods g
WHERE
  EXISTS (
    SELECT
      1
    FROM
      Ledger l
    WHERE
      l.goods_id = g.goods_id
      AND l.entry_date BETWEEN '2019-01-01' AND '2019-03-31'
  )
  AND NOT EXISTS (
    SELECT
      1
    FROM
      Ledger l
    WHERE
      l.goods_id = g.goods_id
      AND (
        l.entry_date < '2019-01-01'
        OR l.entry_date > '2019-03-31'
      )
  )