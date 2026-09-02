SELECT
  volume_id,
  title,
  author,
  printed_year
FROM
  Catalog
WHERE
  score IS NULL
ORDER BY
  volume_id