SELECT
  ride_date AS Day,
  ROUND(
    AVG(
      CASE
        WHEN t.status != 'completed' THEN 1
        ELSE 0
      END
    ),
    2
  ) AS `Cancellation Rate`
FROM
  Rides t
  JOIN Members uc ON t.rider_id = uc.member_id
  AND uc.banned = 'No'
  JOIN Members ud ON t.driver_id = ud.member_id
  AND ud.banned = 'No'
WHERE
  t.ride_date BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY
  t.ride_date