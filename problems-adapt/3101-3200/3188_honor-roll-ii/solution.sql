SELECT
  s.cadet_id
FROM
  Cadets AS s
WHERE
  (
    SELECT
      COUNT(*)
    FROM
      Modules AS m
    WHERE
      m.track = s.track
      AND LOWER(m.required) = 'yes'
  ) = (
    SELECT
      COUNT(DISTINCT e.module_id)
    FROM
      Registrations AS e
      JOIN Modules AS c ON c.module_id = e.module_id
    WHERE
      e.cadet_id = s.cadet_id
      AND c.track = s.track
      AND LOWER(c.required) = 'yes'
      AND e.grade = 'A'
  )
  AND (
    SELECT
      COUNT(DISTINCT e.module_id)
    FROM
      Registrations AS e
      JOIN Modules AS c ON c.module_id = e.module_id
    WHERE
      e.cadet_id = s.cadet_id
      AND c.track = s.track
      AND LOWER(c.required) = 'no'
  ) >= 2
  AND NOT EXISTS (
    SELECT
      1
    FROM
      Registrations AS e
      JOIN Modules AS c ON c.module_id = e.module_id
    WHERE
      e.cadet_id = s.cadet_id
      AND c.track = s.track
      AND (
        (
          LOWER(c.required) = 'yes'
          AND e.grade <> 'A'
        )
        OR (
          LOWER(c.required) = 'no'
          AND e.grade NOT IN ('A', 'B')
        )
      )
  )
  AND (
    SELECT
      AVG(e.GPA)
    FROM
      Registrations AS e
    WHERE
      e.cadet_id = s.cadet_id
  ) >= 2.5
ORDER BY
  s.cadet_id