SELECT
  specimen_id,
  strand,
  organism,
  strand GLOB 'ATG*' AS has_start,
  (
    strand GLOB '*TAA'
    OR strand GLOB '*TAG'
    OR strand GLOB '*TGA'
  ) AS has_stop,
  strand GLOB '*ATAT*' AS has_atat,
  strand GLOB '*GGG*' AS has_ggg
FROM
  specimens
ORDER BY
  specimen_id ASC