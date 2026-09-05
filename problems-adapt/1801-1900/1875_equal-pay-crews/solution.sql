SELECT
  c.crew_id,
  c.member_name,
  c.wage,
  g.squad_id
FROM
  Crew c
  JOIN (
    SELECT
      wage,
      DENSE_RANK() OVER (
        ORDER BY
          wage ASC
      ) AS squad_id
    FROM
      Crew
    GROUP BY
      wage
    HAVING
      COUNT(*) >= 2
  ) g ON c.wage = g.wage
ORDER BY
  g.squad_id ASC,
  c.crew_id ASC