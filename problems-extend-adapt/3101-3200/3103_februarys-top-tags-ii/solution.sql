WITH RECURSIVE
  split (chirp_id, tag, rest) AS (
    SELECT
      chirp_id,
      CAST(NULL AS VARCHAR),
      body
    FROM
      Chirps
    UNION ALL
    SELECT
      chirp_id,
      SUBSTR(
        SUBSTR(rest, INSTR(rest, '#')),
        1,
        INSTR(SUBSTR(rest, INSTR(rest, '#')) || ' ', ' ') - 1
      ),
      CASE
        WHEN INSTR(SUBSTR(rest, INSTR(rest, '#') + 1), '#') > 0 THEN SUBSTR(rest, INSTR(rest, '#') + 1)
      END
    FROM
      split
    WHERE
      rest IS NOT NULL
      AND INSTR(rest, '#') > 0
  )
SELECT
  tag,
  COUNT(*) AS tag_count
FROM
  (
    SELECT
      tag
    FROM
      split
    WHERE
      tag IS NOT NULL
  )
GROUP BY
  tag
ORDER BY
  tag_count DESC,
  tag DESC
LIMIT
  3