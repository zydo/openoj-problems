WITH
  firsts AS (
    SELECT
      user_id,
      MIN(login_date) AS first_login
    FROM
      Logins
    GROUP BY
      user_id
  )
SELECT
  first_login,
  COUNT(*) AS new_users,
  ROUND(
    1.0 * SUM(
      CASE
        WHEN t.login_date IS NOT NULL THEN 1
        ELSE 0
      END
    ) / COUNT(*),
    2
  ) AS return_rate
FROM
  firsts f
  LEFT JOIN Logins t ON t.user_id = f.user_id
  AND t.login_date = date(f.first_login, '+1 day')
GROUP BY
  first_login