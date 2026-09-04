WITH RECURSIVE
  cells (lineNo, pos, val, rest) AS (
    SELECT
      lineNo,
      1,
      substr(content, 1, instr(content || ' ', ' ') - 1),
      substr(content, instr(content || ' ', ' ') + 1)
    FROM
      Document
    UNION ALL
    SELECT
      lineNo,
      pos + 1,
      substr(rest, 1, instr(rest || ' ', ' ') - 1),
      substr(rest, instr(rest || ' ', ' ') + 1)
    FROM
      cells
    WHERE
      rest <> ''
  )
SELECT
  group_concat(
    val,
    ' '
    ORDER BY
      lineNo
  )
FROM
  cells
GROUP BY
  pos