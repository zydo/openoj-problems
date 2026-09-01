WITH
  dial_sides AS (
    SELECT
      t.name AS territory,
      d.minutes AS minutes
    FROM
      Dials d
      JOIN Subscribers s ON d.dialer_id = s.id
      JOIN Territories t ON t.dialing = SUBSTR(s.phone, 1, 3)
    UNION ALL
    SELECT
      t.name AS territory,
      d.minutes AS minutes
    FROM
      Dials d
      JOIN Subscribers s ON d.receiver_id = s.id
      JOIN Territories t ON t.dialing = SUBSTR(s.phone, 1, 3)
  )
SELECT
  territory
FROM
  dial_sides
GROUP BY
  territory
HAVING
  AVG(minutes) > (
    SELECT
      AVG(minutes)
    FROM
      dial_sides
  )