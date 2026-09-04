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
  )
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
  ) AS active_couriers,
  (
    SELECT
      COUNT(*)
    FROM
      AcceptedRequests
      JOIN Requests ON Requests.request_id = AcceptedRequests.request_id
    WHERE
      strftime('%Y-%m', Requests.requested_at) = printf('2020-%02d', months.month)
  ) AS accepted_requests
FROM
  months
ORDER BY
  months.month