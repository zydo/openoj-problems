SELECT
  category,
  ROUND(AVG(rating * 1.0 / placement), 2) AS appeal,
  ROUND(AVG(rating < 3) * 100, 2) AS poor_share
FROM
  Dishes
GROUP BY
  category