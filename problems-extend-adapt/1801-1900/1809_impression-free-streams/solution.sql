SELECT
  stream_id
FROM
  Stream s
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      Impressions i
    WHERE
      i.viewer_id = s.viewer_id
      AND i.shown_at BETWEEN s.start_at AND s.end_at
  )