SELECT DISTINCT
  b.name
FROM
  Library b
  JOIN Showings s ON b.title_id = s.title_id
WHERE
  b.for_kids = 'Y'
  AND b.kind = 'Movies'
  AND STRFTIME('%Y-%m', s.shown_at) = '2020-06'