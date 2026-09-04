SELECT
  sku,
  sticker_price AS price
FROM
  (
    SELECT
      sku,
      sticker_price,
      ROW_NUMBER() OVER (
        PARTITION BY
          sku
        ORDER BY
          marked_on DESC
      ) AS rn
    FROM
      Prices
    WHERE
      marked_on <= '2019-08-16'
  ) AS ranked
WHERE
  rn = 1
UNION
SELECT
  sku,
  10 AS price
FROM
  Prices
GROUP BY
  sku
HAVING
  MIN(marked_on) > '2019-08-16'