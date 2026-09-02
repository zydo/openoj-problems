WITH
  counts AS (
    SELECT
      unit_id,
      COUNT(*) AS staff_count
    FROM
      Staff
    GROUP BY
      unit_id
  )
SELECT
  e.staff_name AS manager_name,
  c.unit_id
FROM
  counts c
  JOIN Staff e ON e.unit_id = c.unit_id
WHERE
  e.role = 'Manager'
  AND c.staff_count = (
    SELECT
      MAX(staff_count)
    FROM
      counts
  )
ORDER BY
  c.unit_id