WITH
  walls AS (
    SELECT
      position,
      height,
      MAX(height) OVER (
        ORDER BY
          position
      ) AS lft,
      MAX(height) OVER (
        ORDER BY
          position DESC
      ) AS rgt
    FROM
      Bars
  ),
  drops AS (
    SELECT
      MAX(MIN(lft, rgt) - height, 0) AS water
    FROM
      walls
  )
SELECT
  COALESCE(SUM(water), 0) AS total_pooled_water
FROM
  drops