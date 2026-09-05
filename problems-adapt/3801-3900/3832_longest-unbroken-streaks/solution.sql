WITH
  solo_days AS (
    SELECT
      member_id,
      log_date,
      event
    FROM
      DailyLog
    GROUP BY
      member_id,
      log_date
    HAVING
      COUNT(*) = 1
  ),
  ranked AS (
    SELECT
      member_id,
      event,
      log_date,
      ROW_NUMBER() OVER (
        PARTITION BY
          member_id,
          event
        ORDER BY
          log_date
      ) AS rn
    FROM
      solo_days
  ),
  runs AS (
    SELECT
      member_id,
      event,
      COUNT(*) AS run_length,
      MIN(log_date) AS start_day,
      MAX(log_date) AS end_day
    FROM
      ranked
    GROUP BY
      member_id,
      event,
      DATE(log_date, '-' || rn || ' days')
    HAVING
      COUNT(*) >= 5
  ),
  best AS (
    SELECT
      member_id,
      event,
      run_length,
      start_day,
      end_day,
      ROW_NUMBER() OVER (
        PARTITION BY
          member_id
        ORDER BY
          run_length DESC,
          start_day ASC,
          event ASC
      ) AS rn
    FROM
      runs
  )
SELECT
  member_id,
  event,
  run_length,
  start_day,
  end_day
FROM
  best
WHERE
  rn = 1
ORDER BY
  run_length DESC,
  member_id ASC