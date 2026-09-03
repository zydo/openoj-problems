WITH
  ranked AS (
    SELECT
      staff_id,
      score,
      ROW_NUMBER() OVER (
        PARTITION BY
          staff_id
        ORDER BY
          held_on DESC
      ) AS recency
    FROM
      appraisals
  ),
  last3 AS (
    SELECT
      staff_id,
      score,
      LEAD(score) OVER (
        PARTITION BY
          staff_id
        ORDER BY
          recency DESC
      ) AS next_score
    FROM
      ranked
    WHERE
      recency <= 3
  )
SELECT
  e.staff_id,
  e.name,
  MAX(l.score) - MIN(l.score) AS score_gain
FROM
  last3 AS l
  JOIN staff AS e ON e.staff_id = l.staff_id
GROUP BY
  e.staff_id,
  e.name
HAVING
  COUNT(*) = 3
  AND MIN(l.next_score - l.score) > 0
ORDER BY
  score_gain DESC,
  e.name ASC