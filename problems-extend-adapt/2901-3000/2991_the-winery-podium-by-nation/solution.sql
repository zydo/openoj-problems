WITH
  totals AS (
    SELECT
      nation,
      winery,
      SUM(rating) AS total_rating
    FROM
      Estates
    GROUP BY
      nation,
      winery
  ),
  ranked AS (
    SELECT
      nation,
      winery,
      total_rating,
      ROW_NUMBER() OVER (
        PARTITION BY
          nation
        ORDER BY
          total_rating DESC,
          winery
      ) AS rn
    FROM
      totals
  )
SELECT
  nation,
  MAX(
    CASE
      WHEN rn = 1 THEN winery || ' (' || total_rating || ')'
    END
  ) AS top_winery,
  COALESCE(
    MAX(
      CASE
        WHEN rn = 2 THEN winery || ' (' || total_rating || ')'
      END
    ),
    'No second winery'
  ) AS second_winery,
  COALESCE(
    MAX(
      CASE
        WHEN rn = 3 THEN winery || ' (' || total_rating || ')'
      END
    ),
    'No third winery'
  ) AS third_winery
FROM
  ranked
GROUP BY
  nation
ORDER BY
  nation