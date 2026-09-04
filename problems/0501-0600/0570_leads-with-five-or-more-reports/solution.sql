SELECT
  name
FROM
  Personnel
WHERE
  id IN (
    SELECT
      lead_id
    FROM
      Personnel
    GROUP BY
      lead_id
    HAVING
      COUNT(*) >= 5
  )