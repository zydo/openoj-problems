SELECT
  placed_on,
  ROUND(100.0 * SUM(placed_on = wanted_on) / COUNT(*), 2) AS same_day_pct
FROM
  Dispatches
GROUP BY
  placed_on
ORDER BY
  placed_on