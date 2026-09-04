SELECT
  actor_id,
  director_id
FROM
  TeamUp
GROUP BY
  actor_id,
  director_id
HAVING
  COUNT(*) >= 3