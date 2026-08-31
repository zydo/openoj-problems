WITH
  ranked AS (
    SELECT
      id,
      firm,
      pay,
      ROW_NUMBER() OVER (
        PARTITION BY
          firm
        ORDER BY
          pay,
          id
      ) AS rn,
      COUNT(*) OVER (
        PARTITION BY
          firm
      ) AS cnt
    FROM
      Staff
  )
SELECT
  id,
  firm,
  pay
FROM
  ranked
WHERE
  rn IN ((cnt + 1) / 2, (cnt + 2) / 2)