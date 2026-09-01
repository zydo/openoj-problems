SELECT
  ROUND(
    100.0 * SUM(d.placed_on = d.requested_on) / COUNT(*),
    2
  ) AS same_day_share
FROM
  Dropoffs AS d
  JOIN (
    SELECT
      diner_id,
      MIN(placed_on) AS first_placed_on
    FROM
      Dropoffs
    GROUP BY
      diner_id
  ) AS firsts ON d.diner_id = firsts.diner_id
  AND d.placed_on = firsts.first_placed_on