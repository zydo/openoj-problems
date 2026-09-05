SELECT
  MIN(left_point.coordinate - right_point.coordinate) AS nearest_distance
FROM
  AxisPoints left_point
  JOIN AxisPoints right_point ON left_point.coordinate > right_point.coordinate