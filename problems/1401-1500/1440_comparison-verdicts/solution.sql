SELECT
  c.left_name AS left_name,
  c.op AS op,
  c.right_name AS right_name,
  CASE
    WHEN c.op = '>'
    AND ls.value > rs.value THEN 'true'
    WHEN c.op = '<'
    AND ls.value < rs.value THEN 'true'
    WHEN c.op = '='
    AND ls.value = rs.value THEN 'true'
    ELSE 'false'
  END AS verdict
FROM
  Comparisons c
  JOIN Symbols ls ON c.left_name = ls.name
  JOIN Symbols rs ON c.right_name = rs.name