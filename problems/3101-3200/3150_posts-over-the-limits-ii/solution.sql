SELECT
  post_id
FROM
  Posts
WHERE
  LENGTH(body) > 140
  OR LENGTH(body) - LENGTH(REPLACE(body, '@', '')) > 3
  OR LENGTH(body) - LENGTH(REPLACE(body, '#', '')) > 3
ORDER BY
  post_id