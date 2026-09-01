SELECT
  ROUND(
    100.0 * SUM(placed_on = requested_on) / COUNT(*),
    2
  ) AS same_day_share
FROM
  Dropoffs