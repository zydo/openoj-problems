WITH
  events AS (
    SELECT
      arrival_time,
      0 AS event_kind,
      NULL AS ferry_id,
      NULL AS capacity,
      1 AS rider_delta
    FROM
      Travelers
    UNION ALL
    SELECT
      arrival_time,
      1 AS event_kind,
      ferry_id,
      capacity,
      0 AS rider_delta
    FROM
      Ferries
  ),
  running AS (
    SELECT
      arrival_time,
      event_kind,
      ferry_id,
      capacity,
      SUM(rider_delta) OVER (
        ORDER BY
          arrival_time,
          event_kind ROWS BETWEEN UNBOUNDED PRECEDING
          AND CURRENT ROW
      ) AS waiting
    FROM
      events
  ),
  ferry_rows AS (
    SELECT
      ferry_id,
      arrival_time,
      capacity,
      waiting
    FROM
      running
    WHERE
      event_kind = 1
  ),
  cumulative AS (
    SELECT
      ferry_id,
      arrival_time,
      waiting,
      SUM(capacity) OVER (
        ORDER BY
          arrival_time ROWS BETWEEN UNBOUNDED PRECEDING
          AND CURRENT ROW
      ) AS capacity_sum
    FROM
      ferry_rows
  ),
  boarded_total AS (
    SELECT
      ferry_id,
      arrival_time,
      capacity_sum + MIN(
        CASE
          WHEN waiting < capacity_sum THEN waiting - capacity_sum
          ELSE 0
        END
      ) OVER (
        ORDER BY
          arrival_time ROWS BETWEEN UNBOUNDED PRECEDING
          AND CURRENT ROW
      ) AS total_boarded
    FROM
      cumulative
  )
SELECT
  ferry_id,
  total_boarded - LAG(total_boarded, 1, 0) OVER (
    ORDER BY
      arrival_time
  ) AS riders_cnt
FROM
  boarded_total
ORDER BY
  ferry_id