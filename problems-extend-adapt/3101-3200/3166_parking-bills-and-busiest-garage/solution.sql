WITH
  stay AS (
    SELECT
      vehicle_id,
      garage_id,
      amount_paid,
      CAST(strftime('%s', left_at) AS INTEGER) - CAST(strftime('%s', entered_at) AS INTEGER) AS secs
    FROM
      Stays
  ),
  totals AS (
    SELECT
      vehicle_id,
      SUM(amount_paid) AS total_paid,
      ROUND(SUM(amount_paid) * 3600.0 / SUM(secs), 2) AS avg_hourly_rate
    FROM
      stay
    GROUP BY
      vehicle_id
  ),
  per_lot AS (
    SELECT
      vehicle_id,
      garage_id,
      SUM(secs) AS lot_secs
    FROM
      stay
    GROUP BY
      vehicle_id,
      garage_id
  ),
  ranked AS (
    SELECT
      vehicle_id,
      garage_id,
      ROW_NUMBER() OVER (
        PARTITION BY
          vehicle_id
        ORDER BY
          lot_secs DESC,
          garage_id ASC
      ) AS rn
    FROM
      per_lot
  )
SELECT
  t.vehicle_id,
  t.total_paid,
  t.avg_hourly_rate,
  r.garage_id AS top_garage
FROM
  totals t
  JOIN ranked r ON r.vehicle_id = t.vehicle_id
WHERE
  r.rn = 1
ORDER BY
  t.vehicle_id