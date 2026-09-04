SELECT
  p1.item_id AS item1_id,
  p2.item_id AS item2_id,
  i1.section AS item1_section,
  i2.section AS item2_section,
  COUNT(DISTINCT p1.buyer_id) AS shopper_count
FROM
  PurchaseLog p1
  JOIN PurchaseLog p2 ON p1.buyer_id = p2.buyer_id
  AND p1.item_id < p2.item_id
  JOIN ItemCatalog i1 ON i1.item_id = p1.item_id
  JOIN ItemCatalog i2 ON i2.item_id = p2.item_id
GROUP BY
  p1.item_id,
  p2.item_id,
  i1.section,
  i2.section
HAVING
  COUNT(DISTINCT p1.buyer_id) >= 3
ORDER BY
  shopper_count DESC,
  item1_id ASC,
  item2_id ASC