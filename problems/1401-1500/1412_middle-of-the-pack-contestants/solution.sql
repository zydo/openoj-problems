SELECT
  c.contestant_id,
  c.contestant_name
FROM
  Contestants c
WHERE
  c.contestant_id IN (
    SELECT DISTINCT
      contestant_id
    FROM
      Heats
  )
  AND c.contestant_id NOT IN (
    SELECT
      h.contestant_id
    FROM
      Heats h
      JOIN (
        SELECT
          heat_id,
          MAX(score) AS max_score,
          MIN(score) AS min_score
        FROM
          Heats
        GROUP BY
          heat_id
      ) x ON h.heat_id = x.heat_id
    WHERE
      h.score = x.max_score
      OR h.score = x.min_score
  )
ORDER BY
  c.contestant_id