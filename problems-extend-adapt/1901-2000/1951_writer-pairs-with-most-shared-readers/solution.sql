WITH
  counts AS (
    SELECT
      r1.writer_id AS writer1_id,
      r2.writer_id AS writer2_id,
      COUNT(DISTINCT r1.reader_id) AS common
    FROM
      Follows r1
      JOIN Follows r2 ON r1.writer_id < r2.writer_id
      AND r1.reader_id = r2.reader_id
    GROUP BY
      r1.writer_id,
      r2.writer_id
  )
SELECT
  writer1_id,
  writer2_id
FROM
  counts
WHERE
  common = (
    SELECT
      MAX(common)
    FROM
      counts
  )