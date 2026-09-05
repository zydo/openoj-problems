SELECT
  SUBSTR(address, INSTR(address, '@') + 1) AS domain,
  COUNT(*) AS total
FROM
  Signups
GROUP BY
  domain
HAVING
  domain LIKE '%.com'
ORDER BY
  domain ASC