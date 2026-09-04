SELECT
  a.id AS first_id,
  b.id AS second_id,
  ABS(a.x - b.x) * ABS(a.y - b.y) AS area
FROM
  Markers a
  JOIN Markers b ON a.id < b.id
WHERE
  ABS(a.x - b.x) * ABS(a.y - b.y) > 0
ORDER BY
  area DESC,
  first_id ASC,
  second_id ASC