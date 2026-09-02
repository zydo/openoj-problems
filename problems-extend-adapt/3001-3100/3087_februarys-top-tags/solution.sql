WITH
  feb AS (
    SELECT
      SUBSTR(body, INSTR(body, '#')) AS tail
    FROM
      Chirps
    WHERE
      chirp_date BETWEEN '2024-02-01' AND '2024-02-29'
  ),
  tags AS (
    SELECT
      CASE
        WHEN INSTR(tail, ' ') = 0 THEN tail
        ELSE SUBSTR(tail, 1, INSTR(tail, ' ') - 1)
      END AS tag
    FROM
      feb
  )
SELECT
  tag,
  COUNT(*) AS tag_count
FROM
  tags
GROUP BY
  tag
ORDER BY
  tag_count DESC,
  tag DESC
LIMIT
  3