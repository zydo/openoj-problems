SELECT
  member_id,
  name || '(' || substr(profession, 1, 1) || ')' AS name
FROM
  Member
ORDER BY
  member_id DESC