WITH
  with_gap AS (
    SELECT
      ss.grower_id,
      ss.planting_date,
      ss.crop,
      ss.hours_logged,
      ss.planting_id,
      COALESCE(
        CAST(
          julianday(ss.planting_date) - julianday(
            LAG(ss.planting_date) OVER (
              PARTITION BY
                ss.grower_id
              ORDER BY
                ss.planting_date,
                ss.planting_id
            )
          ) AS INTEGER
        ),
        0
      ) AS day_gap
    FROM
      plantings ss
  ),
  blocks AS (
    SELECT
      *,
      SUM(
        CASE
          WHEN day_gap > 2 THEN 1
          ELSE 0
        END
      ) OVER (
        PARTITION BY
          grower_id
        ORDER BY
          planting_date,
          planting_id ROWS BETWEEN UNBOUNDED PRECEDING
          AND CURRENT ROW
      ) AS block_id
    FROM
      with_gap
  ),
  block_stats AS (
    SELECT
      grower_id,
      block_id,
      COUNT(*) AS session_count,
      COUNT(DISTINCT crop) AS rotation_length,
      SUM(hours_logged) AS total_hours
    FROM
      blocks
    GROUP BY
      grower_id,
      block_id
    HAVING
      COUNT(*) >= 2 * COUNT(DISTINCT crop)
      AND COUNT(DISTINCT crop) >= 3
  ),
  best_block AS (
    SELECT
      grower_id,
      rotation_length,
      total_hours
    FROM
      (
        SELECT
          grower_id,
          rotation_length,
          total_hours,
          ROW_NUMBER() OVER (
            PARTITION BY
              grower_id
            ORDER BY
              rotation_length DESC,
              total_hours DESC,
              block_id
          ) AS rn
        FROM
          block_stats
      )
    WHERE
      rn = 1
  )
SELECT
  s.grower_id,
  s.grower_name,
  s.region,
  b.rotation_length,
  CAST(b.total_hours AS REAL) AS rotation_hours
FROM
  best_block b
  JOIN growers s ON s.grower_id = b.grower_id
ORDER BY
  b.rotation_length DESC,
  b.total_hours DESC,
  s.grower_id ASC