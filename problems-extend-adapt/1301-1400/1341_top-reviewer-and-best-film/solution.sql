SELECT
  results
FROM
  (
    SELECT
      u.name AS results
    FROM
      Reviews mr
      JOIN Viewers u ON u.viewer_id = mr.viewer_id
    GROUP BY
      mr.viewer_id,
      u.name
    ORDER BY
      COUNT(*) DESC,
      u.name ASC
    LIMIT
      1
  )
UNION ALL
SELECT
  results
FROM
  (
    SELECT
      m.title AS results
    FROM
      Reviews mr
      JOIN Films m ON m.film_id = mr.film_id
    WHERE
      mr.reviewed_on LIKE '2020-02-%'
    GROUP BY
      mr.film_id,
      m.title
    ORDER BY
      AVG(mr.rating) DESC,
      m.title ASC
    LIMIT
      1
  )