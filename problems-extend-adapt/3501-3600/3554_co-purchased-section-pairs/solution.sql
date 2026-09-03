WITH
  buyer_sections AS (
    SELECT DISTINCT
      pp.buyer_id,
      pi.section
    FROM
      PurchaseLog pp
      JOIN ItemCatalog pi ON pp.item_id = pi.item_id
  ),
  section_pairs AS (
    SELECT
      a.section AS section1,
      b.section AS section2,
      COUNT(*) AS shopper_count
    FROM
      buyer_sections a
      JOIN buyer_sections b ON a.buyer_id = b.buyer_id
      AND a.section < b.section
    GROUP BY
      a.section,
      b.section
  )
SELECT
  section1,
  section2,
  shopper_count
FROM
  section_pairs
WHERE
  shopper_count >= 3
ORDER BY
  shopper_count DESC,
  section1,
  section2