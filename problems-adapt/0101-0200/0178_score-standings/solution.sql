SELECT
  points,
  DENSE_RANK() OVER (
    ORDER BY
      points DESC
  )
FROM
  Attempts
ORDER BY
  points DESC