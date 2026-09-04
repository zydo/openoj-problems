WITH
  boundaries AS (
    SELECT
      worker_id,
      clock_in AS ts,
      + 1 AS delta,
      DATE(clock_in) AS day
    FROM
      ShiftLog
    UNION ALL
    SELECT
      worker_id,
      clock_out AS ts,
      -1 AS delta,
      DATE(clock_in) AS day
    FROM
      ShiftLog
  ),
  sweep AS (
    SELECT
      worker_id,
      SUM(delta) OVER (
        PARTITION BY
          worker_id,
          day
        ORDER BY
          strftime('%s', ts),
          delta
      ) AS running_shifts
    FROM
      boundaries
  ),
  pair_totals AS (
    SELECT
      e1.worker_id AS worker_id,
      SUM(
        CAST(
          (
            strftime('%s', MIN(e1.clock_out, e2.clock_out)) - strftime('%s', e2.clock_in)
          ) / 60 AS INTEGER
        )
      ) AS total_clash_duration
    FROM
      ShiftLog e1
      JOIN ShiftLog e2 ON e1.worker_id = e2.worker_id
      AND DATE(e1.clock_in) = DATE(e2.clock_in)
      AND e1.clock_in < e2.clock_in
      AND e1.clock_out > e2.clock_in
    GROUP BY
      e1.worker_id
  )
SELECT
  sweep.worker_id,
  MAX(sweep.running_shifts) AS max_clashing_shifts,
  COALESCE(pair_totals.total_clash_duration, 0) AS total_clash_duration
FROM
  sweep
  LEFT JOIN pair_totals ON pair_totals.worker_id = sweep.worker_id
GROUP BY
  sweep.worker_id
ORDER BY
  sweep.worker_id