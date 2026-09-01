WITH
  circle AS (
    SELECT
      buddy_b AS friend
    FROM
      Buddies
    WHERE
      buddy_a = 1
    UNION
    SELECT
      buddy_a AS friend
    FROM
      Buddies
    WHERE
      buddy_b = 1
  )
SELECT DISTINCT
  l.book_id AS recommended_book
FROM
  circle f
  JOIN Shelved l ON l.reader_id = f.friend
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      Shelved mine
    WHERE
      mine.reader_id = 1
      AND mine.book_id = l.book_id
  )