WITH
  ranked AS (
    SELECT
      d.given_name,
      cl.direction,
      cl.duration,
      PRINTF(
        '%02d:%02d:%02d',
        cl.duration / 3600,
        (cl.duration % 3600) / 60,
        cl.duration % 60
      ) AS duration_formatted,
      ROW_NUMBER() OVER (
        PARTITION BY
          cl.direction
        ORDER BY
          cl.duration DESC,
          d.given_name DESC
      ) AS rn
    FROM
      CallLog cl
      JOIN Directory d ON d.person_id = cl.person_id
  )
SELECT
  given_name,
  direction,
  duration_formatted
FROM
  ranked
WHERE
  rn <= 3
ORDER BY
  direction DESC,
  duration DESC,
  given_name DESC