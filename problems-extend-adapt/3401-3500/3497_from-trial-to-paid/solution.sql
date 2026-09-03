SELECT
  ft.account_id,
  ROUND(ft.avg_trial, 2) AS trial_avg_minutes,
  ROUND(pt.avg_paid, 2) AS paid_avg_minutes
FROM
  (
    SELECT
      account_id,
      AVG(minutes) AS avg_trial
    FROM
      usage_log
    WHERE
      phase = 'free_trial'
    GROUP BY
      account_id
  ) ft
  JOIN (
    SELECT
      account_id,
      AVG(minutes) AS avg_paid
    FROM
      usage_log
    WHERE
      phase = 'paid'
    GROUP BY
      account_id
  ) pt ON ft.account_id = pt.account_id
ORDER BY
  ft.account_id