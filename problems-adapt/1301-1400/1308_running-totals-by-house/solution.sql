SELECT
  house,
  round_on,
  SUM(points) OVER (
    PARTITION BY
      house
    ORDER BY
      round_on
  ) AS total
FROM
  Rounds
ORDER BY
  house ASC,
  round_on ASC