WITH RECURSIVE
  months (month) AS (
    SELECT
      1
    UNION ALL
    SELECT
      month + 1
    FROM
      months
    WHERE
      month < 12
  ),
  available AS (
    SELECT
      months.month AS month,
      (
        SELECT
          COUNT(*)
        FROM
          Couriers
        WHERE
          Couriers.join_date < date(
            '2020-' || printf('%02d', months.month) || '-01',
            '+1 month'
          )
      ) AS available_couriers
    FROM
      months
  ),
  working AS (
    SELECT
      available.month AS month,
      (
        SELECT
          COUNT(DISTINCT AcceptedRequests.courier_id)
        FROM
          AcceptedRequests
          JOIN Requests ON Requests.request_id = AcceptedRequests.request_id
        WHERE
          strftime('%Y-%m', Requests.requested_at) = printf('2020-%02d', available.month)
      ) AS working_couriers,
      available.available_couriers AS available_couriers
    FROM
      available
  )
SELECT
  working.month AS month,
  CASE
    WHEN working.available_couriers = 0 THEN 0.0
    ELSE ROUND(
      working.working_couriers * 100.0 / working.available_couriers,
      2
    )
  END AS busy_percentage
FROM
  working
ORDER BY
  working.month