SELECT
  entrant_id,
  entrant_name,
  entrant_town,
  entrant_points
FROM
  LineUp
ORDER BY
  slot_no ASC
LIMIT
  3