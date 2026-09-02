SELECT
  CASE
    WHEN side1 + side2 <= side3 THEN 'Not A Triangle'
    WHEN side1 + side3 <= side2 THEN 'Not A Triangle'
    WHEN side2 + side3 <= side1 THEN 'Not A Triangle'
    WHEN side1 = side2
    AND side2 = side3 THEN 'Equilateral'
    WHEN side1 = side2
    OR side2 = side3
    OR side1 = side3 THEN 'Isosceles'
    ELSE 'Scalene'
  END AS triangle_type
FROM
  SideLengths