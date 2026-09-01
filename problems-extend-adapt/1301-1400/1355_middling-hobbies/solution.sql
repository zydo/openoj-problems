SELECT
  hobby
FROM
  (
    SELECT
      hobby,
      COUNT(*) AS participants,
      MAX(COUNT(*)) OVER () AS hi,
      MIN(COUNT(*)) OVER () AS lo
    FROM
      Roster
    GROUP BY
      hobby
  ) counted
WHERE
  participants < counted.hi
  AND participants > counted.lo