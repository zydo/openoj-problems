WITH
  islands AS (
    SELECT
      MIN(seat_number) AS first_seat_number,
      MAX(seat_number) AS last_seat_number,
      COUNT(*) AS run_length
    FROM
      (
        SELECT
          seat_number,
          seat_number - ROW_NUMBER() OVER (
            ORDER BY
              seat_number
          ) AS island
        FROM
          AuditoriumSeats
        WHERE
          is_open = 1
      )
    GROUP BY
      island
  )
SELECT
  first_seat_number,
  last_seat_number,
  run_length
FROM
  islands
WHERE
  run_length = (
    SELECT
      MAX(run_length)
    FROM
      islands
  )
ORDER BY
  first_seat_number