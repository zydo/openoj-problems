WITH RECURSIVE
  seq (id) AS (
    SELECT
      1
    UNION ALL
    SELECT
      id + 1
    FROM
      seq
    WHERE
      id < (
        SELECT
          MAX(attendee_id)
        FROM
          Attendees
      )
  )
SELECT
  id AS ids
FROM
  seq
WHERE
  id NOT IN (
    SELECT
      attendee_id
    FROM
      Attendees
  )
ORDER BY
  ids