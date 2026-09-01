SELECT DISTINCT
  writer_id AS id
FROM
  Reads
WHERE
  writer_id = reader_id
ORDER BY
  id