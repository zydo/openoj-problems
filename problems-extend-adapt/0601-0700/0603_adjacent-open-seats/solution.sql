WITH
  neighbors AS (
    SELECT
      seat_number,
      is_open,
      LAG(seat_number) OVER (
        ORDER BY
          seat_number
      ) AS prev_number,
      LAG(is_open) OVER (
        ORDER BY
          seat_number
      ) AS prev_open,
      LEAD(seat_number) OVER (
        ORDER BY
          seat_number
      ) AS next_number,
      LEAD(is_open) OVER (
        ORDER BY
          seat_number
      ) AS next_open
    FROM
      AuditoriumSeats
  )
SELECT
  seat_number
FROM
  neighbors
WHERE
  is_open = 1
  AND (
    (
      prev_number = seat_number - 1
      AND prev_open = 1
    )
    OR (
      next_number = seat_number + 1
      AND next_open = 1
    )
  )
ORDER BY
  seat_number ASC