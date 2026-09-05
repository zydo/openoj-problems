WITH
  yearly AS (
    SELECT
      item_id,
      CAST(strftime('%Y', sale_date) AS INTEGER) AS yr,
      COUNT(*) AS tally
    FROM
      Sales
    GROUP BY
      item_id,
      yr
  )
SELECT DISTINCT
  a.item_id
FROM
  yearly a,
  yearly b
WHERE
  a.item_id = b.item_id
  AND b.yr = a.yr + 1
  AND a.tally >= 3
  AND b.tally >= 3