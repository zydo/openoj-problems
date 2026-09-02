SELECT
  (minute_no - 1) / 6 + 1 AS window_no,
  SUM(orders_placed) AS window_total
FROM
  MinuteCounts
GROUP BY
  window_no
ORDER BY
  window_no