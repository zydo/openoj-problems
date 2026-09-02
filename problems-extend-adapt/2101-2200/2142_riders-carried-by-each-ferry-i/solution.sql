WITH
  events AS (
    SELECT
      arrival_time,
      0 AS event_kind,
      NULL AS ferry_id,
      1 AS rider_delta
    FROM
      Travelers
    UNION ALL
    SELECT
      arrival_time,
      1 AS event_kind,
      ferry_id,
      0 AS rider_delta
    FROM
      Ferries
  ),
  running AS (
    SELECT
      arrival_time,
      event_kind,
      ferry_id,
      SUM(rider_delta) OVER (
        ORDER BY
          arrival_time,
          event_kind ROWS BETWEEN UNBOUNDED PRECEDING
          AND CURRENT ROW
      ) AS arrived_count
    FROM
      events
  ),
  ferry_totals AS (
    SELECT
      ferry_id,
      arrival_time,
      arrived_count
    FROM
      running
    WHERE
      event_kind = 1
  ),
  ferry_counts AS (
    SELECT
      ferry_id,
      arrived_count - LAG(arrived_count, 1, 0) OVER (
        ORDER BY
          arrival_time
      ) AS riders_cnt
    FROM
      ferry_totals
  )
SELECT
  ferry_id,
  riders_cnt
FROM
  ferry_counts
ORDER BY
  ferry_id