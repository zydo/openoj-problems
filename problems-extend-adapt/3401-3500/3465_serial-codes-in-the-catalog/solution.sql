SELECT
  item_id,
  item_name,
  blurb
FROM
  catalog
WHERE
  blurb GLOB '*SN[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][^0-9]*'
  OR blurb GLOB '*SN[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'
ORDER BY
  item_id ASC