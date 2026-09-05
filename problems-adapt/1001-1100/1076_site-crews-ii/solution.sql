SELECT
  site_id
FROM
  Site
GROUP BY
  site_id
HAVING
  COUNT(worker_id) = (
    SELECT
      MAX(cnt)
    FROM
      (
        SELECT
          COUNT(worker_id) AS cnt
        FROM
          Site
        GROUP BY
          site_id
      )
  )