WITH
  weekdays AS (
    SELECT
      strftime('%w', done_on) AS wd
    FROM
      Chores
  )
SELECT
  COALESCE(SUM(wd IN ('0', '6')), 0) AS rest_day_cnt,
  COALESCE(SUM(wd NOT IN ('0', '6')), 0) AS work_day_cnt
FROM
  weekdays