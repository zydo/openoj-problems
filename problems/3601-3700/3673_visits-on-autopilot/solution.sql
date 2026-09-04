SELECT
  visit_id,
  device_id,
  (
    strftime('%s', MAX(logged_at)) - strftime('%s', MIN(logged_at))
  ) / 60 AS visit_minutes,
  SUM(event_kind = 'scroll') AS scroll_total
FROM
  telemetry
GROUP BY
  visit_id,
  device_id
HAVING
  strftime('%s', MAX(logged_at)) - strftime('%s', MIN(logged_at)) > 1800
  AND SUM(event_kind = 'scroll') >= 5
  AND 5 * SUM(event_kind = 'click') < SUM(event_kind = 'scroll')
  AND SUM(event_kind = 'purchase') = 0
ORDER BY
  scroll_total DESC,
  visit_id ASC