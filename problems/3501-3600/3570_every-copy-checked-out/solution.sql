SELECT
  b.volume_id,
  b.title,
  b.author,
  b.genre,
  b.published_in,
  COUNT(c.checkout_id) AS active_readers
FROM
  book_shelf b
  JOIN checkouts c ON c.volume_id = b.volume_id
  AND c.brought_back IS NULL
GROUP BY
  b.volume_id,
  b.title,
  b.author,
  b.genre,
  b.published_in,
  b.copies_owned
HAVING
  b.copies_owned = COUNT(c.checkout_id)
ORDER BY
  active_readers DESC,
  b.title ASC