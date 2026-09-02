SELECT
  bike_no,
  MAX(returned_at) AS returned_at
FROM
  Rentals
GROUP BY
  bike_no
ORDER BY
  returned_at DESC