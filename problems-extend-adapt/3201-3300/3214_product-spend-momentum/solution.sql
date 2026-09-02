WITH
  yearly AS (
    SELECT
      CAST(strftime('%Y', logged_at) AS INTEGER) AS year,
      item_id,
      SUM(amount) AS total_spend
    FROM
      sales_log
    GROUP BY
      item_id,
      year
  ),
  lagged AS (
    SELECT
      year,
      item_id,
      total_spend AS year_total,
      LAG(total_spend) OVER (
        PARTITION BY
          item_id
        ORDER BY
          year
      ) AS prior_total
    FROM
      yearly
  )
SELECT
  year,
  item_id,
  year_total,
  prior_total,
  ROUND(
    (year_total - prior_total) * 100.0 / prior_total,
    2
  ) AS growth_pct
FROM
  lagged
ORDER BY
  item_id,
  year