SELECT
  s.cadet_id
FROM
  Cadets s
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      Modules c
    WHERE
      c.track = s.track
      AND NOT EXISTS (
        SELECT
          1
        FROM
          Registrations en
        WHERE
          en.cadet_id = s.cadet_id
          AND en.module_id = c.module_id
      )
  )
  AND NOT EXISTS (
    SELECT
      1
    FROM
      Registrations en
      JOIN Modules c ON c.module_id = en.module_id
    WHERE
      en.cadet_id = s.cadet_id
      AND c.track = s.track
      AND en.grade <> 'A'
  )
ORDER BY
  s.cadet_id