SELECT
  MAX(paid) AS PayByRank
FROM
  (
    SELECT
      paid,
      DENSE_RANK() OVER (
        ORDER BY
          paid DESC
      ) AS rnk
    FROM
      Earnings
  )
WHERE
  rnk = (
    SELECT
      pick
    FROM
      Settings
  )