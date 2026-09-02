SELECT
  f.departure_id AS departure_id,
  MIN(COALESCE(p.cnt, 0), f.seats) AS seated_cnt,
  MAX(COALESCE(p.cnt, 0) - f.seats, 0) AS standby_cnt
FROM
  Departures AS f
  LEFT JOIN (
    SELECT
      departure_id,
      COUNT(*) AS cnt
    FROM
      Bookings
    GROUP BY
      departure_id
  ) AS p ON p.departure_id = f.departure_id
ORDER BY
  f.departure_id ASC