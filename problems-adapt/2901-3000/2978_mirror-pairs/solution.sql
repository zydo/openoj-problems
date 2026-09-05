SELECT DISTINCT
  a.x AS x,
  a.y AS y
FROM
  Points a
  JOIN Points b ON a.x = b.y
  AND a.y = b.x
WHERE
  a.x <= a.y
ORDER BY
  x ASC,
  y ASC