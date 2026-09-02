SELECT
  m.shopper_id,
  m.shopper_name,
  CASE
    WHEN COUNT(v.trip_id) = 0 THEN 'Bronze'
    WHEN COUNT(p.trip_id) * 100 >= COUNT(v.trip_id) * 80 THEN 'Diamond'
    WHEN COUNT(p.trip_id) * 100 >= COUNT(v.trip_id) * 50 THEN 'Gold'
    ELSE 'Silver'
  END AS category
FROM
  Shoppers AS m
  LEFT JOIN Trips AS v ON v.shopper_id = m.shopper_id
  LEFT JOIN Orders AS p ON p.trip_id = v.trip_id
GROUP BY
  m.shopper_id,
  m.shopper_name