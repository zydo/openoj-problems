SELECT
  region,
  GROUP_CONCAT(town, ', ') AS roster,
  SUM(SUBSTR(region, 1, 1) = SUBSTR(town, 1, 1)) AS letter_matches
FROM
  (
    SELECT
      region,
      town
    FROM
      Towns
    ORDER BY
      REPLACE(LOWER(town), ' ', ''),
      town
    LIMIT
      -1
    OFFSET
      0
  )
GROUP BY
  region
HAVING
  COUNT(*) >= 3
  AND SUM(SUBSTR(region, 1, 1) = SUBSTR(town, 1, 1)) >= 1
ORDER BY
  letter_matches DESC,
  region