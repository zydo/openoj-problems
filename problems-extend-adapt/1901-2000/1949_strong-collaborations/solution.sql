WITH
  neighbors AS (
    SELECT
      member1_id AS a,
      member2_id AS b
    FROM
      Collaborations
    UNION ALL
    SELECT
      member2_id AS a,
      member1_id AS b
    FROM
      Collaborations
  )
SELECT
  f.member1_id,
  f.member2_id,
  COUNT(DISTINCT x.b) AS mutual_count
FROM
  Collaborations f
  JOIN neighbors x ON x.a = f.member1_id
  JOIN neighbors y ON y.a = f.member2_id
  AND y.b = x.b
GROUP BY
  f.member1_id,
  f.member2_id
HAVING
  COUNT(DISTINCT x.b) >= 3