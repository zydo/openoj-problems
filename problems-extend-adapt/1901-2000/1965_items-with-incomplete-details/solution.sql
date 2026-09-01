SELECT
  item_id
FROM
  Items
WHERE
  item_id NOT IN (
    SELECT
      item_id
    FROM
      Prices
  )
UNION
SELECT
  item_id
FROM
  Prices
WHERE
  item_id NOT IN (
    SELECT
      item_id
    FROM
      Items
  )
ORDER BY
  item_id