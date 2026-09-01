SELECT DISTINCT
  customer_id
FROM
  Ledger
WHERE
  goods_id = (
    SELECT
      goods_id
    FROM
      Goods
    WHERE
      goods_name = 'S8'
  )
  AND customer_id NOT IN (
    SELECT
      customer_id
    FROM
      Ledger
    WHERE
      goods_id = (
        SELECT
          goods_id
        FROM
          Goods
        WHERE
          goods_name = 'iPhone'
      )
  )