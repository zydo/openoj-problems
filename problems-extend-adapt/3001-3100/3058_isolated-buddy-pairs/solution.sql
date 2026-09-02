WITH
  edges AS (
    SELECT
      person_a AS x,
      person_b AS y
    FROM
      Buddies
    UNION
    SELECT
      person_b AS x,
      person_a AS y
    FROM
      Buddies
  )
SELECT
  f.person_a,
  f.person_b
FROM
  Buddies f
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      edges e1
      INNER JOIN edges e2 ON e1.y = e2.y
    WHERE
      e1.x = f.person_a
      AND e2.x = f.person_b
      AND e1.y <> f.person_a
      AND e1.y <> f.person_b
  )
ORDER BY
  f.person_a ASC,
  f.person_b ASC