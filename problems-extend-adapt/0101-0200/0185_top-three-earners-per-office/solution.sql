SELECT
  o.officeName AS Office,
  a.name AS Analyst,
  a.salary AS Pay
FROM
  (
    SELECT
      *,
      DENSE_RANK() OVER (
        PARTITION BY
          officeId
        ORDER BY
          salary DESC
      ) AS rnk
    FROM
      Analysts
  ) a
  JOIN Offices o ON a.officeId = o.officeId
WHERE
  a.rnk <= 3