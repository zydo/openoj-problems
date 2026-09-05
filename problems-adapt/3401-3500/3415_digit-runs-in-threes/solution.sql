-- A label qualifies when it has at least one digit and no maximal digit
-- run of any length other than three. Has-a-digit is one GLOB, and every
-- forbidden shape (runs of four or more, runs of one or two at the
-- start, the end, the middle, or the whole label) is one NOT GLOB.
SELECT
  sku_id,
  label
FROM
  Skus
WHERE
  label GLOB '*[0-9]*'
  AND label NOT GLOB '*[0-9][0-9][0-9][0-9]*'
  AND label NOT GLOB '[0-9]'
  AND label NOT GLOB '[0-9][0-9]'
  AND label NOT GLOB '[0-9][^0-9]*'
  AND label NOT GLOB '[0-9][0-9][^0-9]*'
  AND label NOT GLOB '*[^0-9][0-9]'
  AND label NOT GLOB '*[^0-9][0-9][0-9]'
  AND label NOT GLOB '*[^0-9][0-9][^0-9]*'
  AND label NOT GLOB '*[^0-9][0-9][0-9][^0-9]*'
ORDER BY
  sku_id ASC