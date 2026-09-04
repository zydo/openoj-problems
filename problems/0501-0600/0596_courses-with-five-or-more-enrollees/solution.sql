SELECT
  class
FROM
  Enrollments
GROUP BY
  class
HAVING
  COUNT(*) >= 5