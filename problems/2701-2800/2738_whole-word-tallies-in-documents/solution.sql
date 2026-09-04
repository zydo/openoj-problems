SELECT
  'bull' AS word,
  COUNT(*) AS count
FROM
  Documents
WHERE
  ' ' || body || ' ' GLOB '* bull *'
UNION ALL
SELECT
  'bear' AS word,
  COUNT(*) AS count
FROM
  Documents
WHERE
  ' ' || body || ' ' GLOB '* bear *'