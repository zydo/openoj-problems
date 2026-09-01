SELECT
  placement_id,
  ROUND(
    COALESCE(
      SUM(
        CASE
          WHEN reaction = 'Clicked' THEN 1
          ELSE 0
        END
      ) * 100.0 / (
        SUM(
          CASE
            WHEN reaction = 'Clicked' THEN 1
            ELSE 0
          END
        ) + SUM(
          CASE
            WHEN reaction = 'Viewed' THEN 1
            ELSE 0
          END
        )
      ),
      0
    ),
    2
  ) AS ctr
FROM
  Placements
GROUP BY
  placement_id
ORDER BY
  ctr DESC,
  placement_id ASC