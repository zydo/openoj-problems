WITH RECURSIVE
cells(id, pos, val, rest) AS (
  SELECT
    id,
    1,
    substr(line, 1, instr(line || ' ', ' ') - 1),
    substr(line, instr(line || ' ', ' ') + 1)
  FROM
    File
  UNION ALL
  SELECT
    id,
    pos + 1,
    substr(rest, 1, instr(rest || ' ', ' ') - 1),
    substr(rest, instr(rest || ' ', ' ') + 1)
  FROM
    cells
  WHERE
    rest <> ''
)
SELECT
  group_concat(val, ' ' ORDER BY id)
FROM
  cells
GROUP BY
  pos