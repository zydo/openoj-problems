SELECT
  ROUND(
    MIN(
      SQRT(
        (a.horizontal - b.horizontal) * (a.horizontal - b.horizontal) + (a.vertical - b.vertical) * (a.vertical - b.vertical)
      )
    ),
    2
  ) AS nearest_distance
FROM
  GridPoints a
  JOIN GridPoints b ON a.horizontal < b.horizontal
  OR (
    a.horizontal = b.horizontal
    AND a.vertical < b.vertical
  )