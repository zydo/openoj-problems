SELECT
  registrant_id,
  name,
  email
FROM
  (
    SELECT
      *,
      substr(email, 1, length(email) - 13) AS local_part,
      substr(email, -13) AS domain_part
    FROM
      Registrants
  )
WHERE
  domain_part = '@leetcode.com'
  AND local_part GLOB '[a-zA-Z]*'
  AND local_part NOT GLOB '*[^a-zA-Z0-9_.-]*'