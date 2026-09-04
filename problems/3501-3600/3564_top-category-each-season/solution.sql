WITH
  categorized AS (
    SELECT
      CASE CAST(strftime('%m', s.sold_on) AS INTEGER)
        WHEN 12 THEN 'Winter'
        WHEN 1 THEN 'Winter'
        WHEN 2 THEN 'Winter'
        WHEN 3 THEN 'Spring'
        WHEN 4 THEN 'Spring'
        WHEN 5 THEN 'Spring'
        WHEN 6 THEN 'Summer'
        WHEN 7 THEN 'Summer'
        WHEN 8 THEN 'Summer'
        ELSE 'Fall'
      END AS season,
      p.department AS department,
      SUM(s.units) AS total_units,
      SUM(
        s.units * CAST(ROUND(s.unit_price * 100) AS INTEGER)
      ) AS total_cents
    FROM
      receipts s
      JOIN catalog p ON p.item_id = s.item_id
    GROUP BY
      season,
      department
  ),
  ranked AS (
    SELECT
      *,
      RANK() OVER (
        PARTITION BY
          season
        ORDER BY
          total_units DESC,
          total_cents DESC,
          department ASC
      ) AS rnk
    FROM
      categorized
  )
SELECT
  season,
  department,
  total_units,
  total_cents / 100.0 AS total_revenue
FROM
  ranked
WHERE
  rnk = 1
ORDER BY
  season ASC