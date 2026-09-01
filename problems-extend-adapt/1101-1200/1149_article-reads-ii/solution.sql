SELECT DISTINCT
  reader_id AS id
FROM
  Reads
GROUP BY
  reader_id,
  read_on
HAVING
  COUNT(DISTINCT article_id) > 1
ORDER BY
  id