SELECT
  s.site_id,
  s.worker_id
FROM
  Site s
  JOIN Worker w ON s.worker_id = w.worker_id
WHERE
  (s.site_id, w.tenure_years) IN (
    SELECT
      s2.site_id,
      MAX(w2.tenure_years)
    FROM
      Site s2
      JOIN Worker w2 ON s2.worker_id = w2.worker_id
    GROUP BY
      s2.site_id
  )