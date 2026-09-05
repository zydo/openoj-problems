SELECT
  profile_id,
  UPPER(SUBSTR(display_name, 1, 1)) || LOWER(SUBSTR(display_name, 2)) AS display_name
FROM
  Profiles
ORDER BY
  profile_id