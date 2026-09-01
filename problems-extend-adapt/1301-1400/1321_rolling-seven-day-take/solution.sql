SELECT
  d1.settled_on AS settled_on,
  SUM(d2.charge) AS charge,
  ROUND(SUM(d2.charge) / 7.0, 2) AS average_charge
FROM
  (
    SELECT DISTINCT
      settled_on
    FROM
      Bill
  ) d1
  JOIN (
    SELECT
      settled_on,
      SUM(charge) AS charge
    FROM
      Bill
    GROUP BY
      settled_on
  ) d2 ON d2.settled_on BETWEEN DATE(d1.settled_on, '-6 day') AND d1.settled_on
GROUP BY
  d1.settled_on
HAVING
  COUNT(*) = 7
ORDER BY
  settled_on ASC