WITH
  numbered AS (
    SELECT
      region,
      name,
      ROW_NUMBER() OVER (
        PARTITION BY
          region
        ORDER BY
          name
      ) AS rn
    FROM
      Enrollee
  )
SELECT
  MAX(
    CASE
      WHEN region = 'America' THEN name
    END
  ) AS America,
  MAX(
    CASE
      WHEN region = 'Asia' THEN name
    END
  ) AS Asia,
  MAX(
    CASE
      WHEN region = 'Europe' THEN name
    END
  ) AS Europe
FROM
  numbered
GROUP BY
  rn