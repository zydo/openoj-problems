SELECT
  email AS RepeatedEmail
FROM
  Signups
GROUP BY
  email
HAVING
  COUNT(email) > 1