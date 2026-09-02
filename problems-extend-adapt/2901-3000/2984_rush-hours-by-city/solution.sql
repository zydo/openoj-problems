WITH
  hourly AS (
    SELECT
      city,
      CAST(strftime('%H', dialed_at) AS INTEGER) AS peak_hour,
      COUNT(*) AS dial_count
    FROM
      Dials
    GROUP BY
      city,
      CAST(strftime('%H', dialed_at) AS INTEGER)
  ),
  ranked AS (
    SELECT
      city,
      peak_hour,
      dial_count,
      RANK() OVER (
        PARTITION BY
          city
        ORDER BY
          dial_count DESC
      ) AS rnk
    FROM
      hourly
  )
SELECT
  city,
  peak_hour,
  dial_count
FROM
  ranked
WHERE
  rnk = 1
ORDER BY
  peak_hour DESC,
  city DESC