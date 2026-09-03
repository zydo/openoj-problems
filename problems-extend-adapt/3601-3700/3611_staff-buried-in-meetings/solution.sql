SELECT
  e.staff_id,
  e.staff_name,
  e.division,
  COUNT(*) AS overloaded_weeks
FROM
  staff e
  JOIN (
    SELECT
      staff_id,
      date(session_date, 'weekday 0', '-6 days') AS week_start,
      SUM(length_hours) AS weekly_hours
    FROM
      sessions
    GROUP BY
      staff_id,
      date(session_date, 'weekday 0', '-6 days')
    HAVING
      SUM(length_hours) > 20
  ) w ON w.staff_id = e.staff_id
GROUP BY
  e.staff_id,
  e.staff_name,
  e.division
HAVING
  COUNT(*) >= 2
ORDER BY
  overloaded_weeks DESC,
  e.staff_name ASC