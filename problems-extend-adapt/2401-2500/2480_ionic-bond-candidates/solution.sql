SELECT
  m.symbol AS metal,
  n.symbol AS nonmetal
FROM
  Atoms m
  JOIN Atoms n ON m.category = 'Metal'
  AND n.category = 'Nonmetal'