SELECT
  CASE
    WHEN origin < destination THEN origin
    ELSE destination
  END AS city1,
  CASE
    WHEN origin < destination THEN destination
    ELSE origin
  END AS city2,
  COUNT(*) AS flight_count,
  SUM(minutes) AS total_minutes
FROM
  Flights
GROUP BY
  CASE
    WHEN origin < destination THEN origin
    ELSE destination
  END,
  CASE
    WHEN origin < destination THEN destination
    ELSE origin
  END