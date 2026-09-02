WITH
  ev AS (
    SELECT
      host_id,
      event_time,
      event_state,
      LEAD(event_time) OVER (
        PARTITION BY
          host_id
        ORDER BY
          event_time
      ) AS next_time,
      LEAD(event_state) OVER (
        PARTITION BY
          host_id
        ORDER BY
          event_time
      ) AS next_state
    FROM
      HostLog
  ),
  spans AS (
    SELECT
      STRFTIME('%s', next_time) - STRFTIME('%s', event_time) AS secs
    FROM
      ev
    WHERE
      event_state = 'start'
      AND next_state = 'stop'
  )
SELECT
  SUM(secs) / 86400 AS total_uptime_days
FROM
  spans