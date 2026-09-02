SELECT
  p.item_id,
  ROUND(
    p.list_price * (100 - COALESCE(d.percent_off, 0)) / 100.0,
    2
  ) AS final_price,
  p.section
FROM
  CatalogItems p
  LEFT JOIN Markdowns d ON p.section = d.section
ORDER BY
  p.item_id