SELECT
  town
FROM
  Homes
GROUP BY
  town
HAVING
  AVG(asking_price) > (
    SELECT
      AVG(asking_price)
    FROM
      Homes
  )
ORDER BY
  town