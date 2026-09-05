WITH
  directed AS (
    SELECT
      member_a AS u,
      member_b AS f
    FROM
      Ties
    UNION ALL
    SELECT
      member_b,
      member_a
    FROM
      Ties
  ),
  population AS (
    SELECT
      COUNT(DISTINCT u) AS users
    FROM
      directed
  )
SELECT
  d.u AS member,
  ROUND(100.0 * COUNT(f) / p.users, 2) AS reach_pct
FROM
  directed d
  CROSS JOIN population p
GROUP BY
  d.u
ORDER BY
  member