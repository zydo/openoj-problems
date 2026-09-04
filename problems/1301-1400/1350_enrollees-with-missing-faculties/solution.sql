SELECT
  s.id AS id,
  s.name AS name
FROM
  Enrollees s
  LEFT JOIN Faculties d ON d.id = s.faculty_id
WHERE
  d.id IS NULL