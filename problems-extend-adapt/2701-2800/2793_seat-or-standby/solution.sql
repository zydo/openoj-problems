WITH
  ranked AS (
    SELECT
      booking_id,
      departure_id,
      ROW_NUMBER() OVER (
        PARTITION BY
          departure_id
        ORDER BY
          booked_at
      ) AS rn
    FROM
      Bookings
  )
SELECT
  r.booking_id AS booking_id,
  CASE
    WHEN r.rn <= f.seats THEN 'Confirmed'
    ELSE 'Waitlist'
  END AS Status
FROM
  ranked AS r
  JOIN Departures AS f ON f.departure_id = r.departure_id
ORDER BY
  r.booking_id ASC