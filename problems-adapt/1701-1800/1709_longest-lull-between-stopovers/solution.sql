WITH
  windows AS (
    SELECT
      traveler_id,
      stopover_date,
      LEAD(stopover_date) OVER (
        PARTITION BY
          traveler_id
        ORDER BY
          stopover_date
      ) AS next_date
    FROM
      Stopovers
  )
SELECT
  traveler_id,
  MAX(
    CAST(
      julianday(COALESCE(next_date, '2021-01-01')) - julianday(stopover_date) AS INTEGER
    )
  ) AS longest_lull
FROM
  windows
GROUP BY
  traveler_id
ORDER BY
  traveler_id