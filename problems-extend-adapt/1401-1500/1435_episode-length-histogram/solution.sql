SELECT
  '[0-5>' AS bucket,
  COUNT(*) AS total
FROM
  Episodes
WHERE
  runtime < 300
UNION ALL
SELECT
  '[5-10>' AS bucket,
  COUNT(*) AS total
FROM
  Episodes
WHERE
  runtime >= 300
  AND runtime < 600
UNION ALL
SELECT
  '[10-15>' AS bucket,
  COUNT(*) AS total
FROM
  Episodes
WHERE
  runtime >= 600
  AND runtime < 900
UNION ALL
SELECT
  '15 or more' AS bucket,
  COUNT(*) AS total
FROM
  Episodes
WHERE
  runtime >= 900