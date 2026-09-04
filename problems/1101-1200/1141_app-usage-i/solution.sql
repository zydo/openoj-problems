SELECT
  event_date AS day,
  COUNT(DISTINCT user_id) AS active_users
FROM
  Events
WHERE
  event_date BETWEEN '2019-06-28' AND '2019-07-27'
GROUP BY
  event_date