SELECT
  MIN(seat_id) AS first_seat,
  MAX(seat_id) AS last_seat
FROM
  (
    SELECT
      seat_id,
      ROW_NUMBER() OVER (
        ORDER BY
          seat_id
      ) AS rn
    FROM
      Seats
  )
GROUP BY
  seat_id - rn
ORDER BY
  first_seat