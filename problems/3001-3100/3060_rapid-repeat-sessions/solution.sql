SELECT DISTINCT
  a.member_id
FROM
  Visits a,
  Visits b
WHERE
  a.member_id = b.member_id
  AND a.visit_kind = b.visit_kind
  AND a.visit_id <> b.visit_id
  AND b.visit_start >= a.visit_start
  AND b.visit_start <= datetime(a.visit_end, '+12 hours')
ORDER BY
  a.member_id ASC