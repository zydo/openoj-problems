SELECT
  b.reader_id,
  l.book_id,
  COUNT(*) AS buddies_shelved
FROM
  (
    SELECT
      buddy_a AS reader_id,
      buddy_b AS buddy_id
    FROM
      Buddies
    UNION
    SELECT
      buddy_b,
      buddy_a
    FROM
      Buddies
  ) b
  JOIN Shelved l ON l.reader_id = b.buddy_id
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      Shelved mine
    WHERE
      mine.reader_id = b.reader_id
      AND mine.book_id = l.book_id
  )
GROUP BY
  b.reader_id,
  l.book_id