SELECT
  first_day,
  COUNT(*) AS user_count
FROM
  (
    SELECT
      user_id,
      MIN(action_date) AS first_day
    FROM
      Sessions
    WHERE
      action = 'login'
    GROUP BY
      user_id
  ) AS first_logins
WHERE
  first_day BETWEEN DATE('2019-06-30', '-90 day') AND '2019-06-30'
GROUP BY
  first_day