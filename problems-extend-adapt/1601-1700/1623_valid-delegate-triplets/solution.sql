SELECT
  a.delegate_name AS delegate_A,
  b.delegate_name AS delegate_B,
  c.delegate_name AS delegate_C
FROM
  OfficeA a,
  OfficeB b,
  OfficeC c
WHERE
  a.delegate_id != b.delegate_id
  AND a.delegate_id != c.delegate_id
  AND b.delegate_id != c.delegate_id
  AND a.delegate_name != b.delegate_name
  AND a.delegate_name != c.delegate_name
  AND b.delegate_name != c.delegate_name