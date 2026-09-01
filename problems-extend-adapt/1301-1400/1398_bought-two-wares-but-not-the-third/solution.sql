SELECT
  pt.patron_id,
  pt.patron_name
FROM
  Patrons pt
WHERE
  pt.patron_id IN (
    SELECT
      patron_id
    FROM
      Baskets
    WHERE
      ware_name = 'A'
  )
  AND pt.patron_id IN (
    SELECT
      patron_id
    FROM
      Baskets
    WHERE
      ware_name = 'B'
  )
  AND pt.patron_id NOT IN (
    SELECT
      patron_id
    FROM
      Baskets
    WHERE
      ware_name = 'C'
  )
ORDER BY
  pt.patron_id