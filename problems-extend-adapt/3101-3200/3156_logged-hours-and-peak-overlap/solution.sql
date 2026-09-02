WITH
  ordered AS (
    SELECT
      worker_id,
      started_at,
      ended_at,
      MAX(ended_at) OVER (
        PARTITION BY
          worker_id
        ORDER BY
          started_at,
          stint_id ROWS BETWEEN UNBOUNDED PRECEDING
          AND 1 PRECEDING
      ) AS prev_end
    FROM
      Stints
  ),
  busy AS (
    SELECT
      worker_id,
      CASE
        WHEN prev_end IS NULL
        OR prev_end <= started_at THEN CAST(strftime('%s', ended_at) AS INTEGER) - CAST(strftime('%s', started_at) AS INTEGER)
        ELSE MAX(
          CAST(strftime('%s', ended_at) AS INTEGER) - CAST(strftime('%s', prev_end) AS INTEGER),
          0
        )
      END AS seg_secs
    FROM
      ordered
  ),
  busy_hours AS (
    SELECT
      worker_id,
      SUM(seg_secs) / 3600 AS hours_logged
    FROM
      busy
    GROUP BY
      worker_id
  ),
  events AS (
    SELECT
      worker_id,
      started_at AS moment,
      1 AS step
    FROM
      Stints
    UNION ALL
    SELECT
      worker_id,
      ended_at AS moment,
      -1 AS step
    FROM
      Stints
  ),
  sweep AS (
    SELECT
      worker_id,
      SUM(step) OVER (
        PARTITION BY
          worker_id
        ORDER BY
          moment ROWS BETWEEN UNBOUNDED PRECEDING
          AND CURRENT ROW
      ) AS level
    FROM
      events
  ),
  peak AS (
    SELECT
      worker_id,
      MAX(level) AS peak_load
    FROM
      sweep
    GROUP BY
      worker_id
  )
SELECT
  h.worker_id,
  h.hours_logged,
  p.peak_load
FROM
  busy_hours h
  JOIN peak p ON p.worker_id = h.worker_id
ORDER BY
  h.worker_id