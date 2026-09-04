SELECT
  detail AS reason,
  COUNT(DISTINCT post_id) AS report_count
FROM
  Interactions
WHERE
  action = 'report'
  AND event_date = '2019-07-04'
GROUP BY
  detail