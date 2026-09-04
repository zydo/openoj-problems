SELECT
  side_a,
  side_b,
  side_c,
  CASE
    WHEN side_a + side_b > side_c
    AND side_a + side_c > side_b
    AND side_b + side_c > side_a THEN 'Yes'
    ELSE 'No'
  END AS forms_triangle
FROM
  SegmentSets