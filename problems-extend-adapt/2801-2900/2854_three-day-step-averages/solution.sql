SELECT
  cur.walker_id,
  cur.log_date,
  ROUND(
    (
      before_two.day_steps + before_one.day_steps + cur.day_steps
    ) / 3.0,
    2
  ) AS mean_steps
FROM
  StepLog cur
  JOIN StepLog before_one ON before_one.walker_id = cur.walker_id
  AND before_one.log_date = DATE(cur.log_date, '-1 day')
  JOIN StepLog before_two ON before_two.walker_id = cur.walker_id
  AND before_two.log_date = DATE(cur.log_date, '-2 day')
ORDER BY
  cur.walker_id ASC,
  cur.log_date ASC