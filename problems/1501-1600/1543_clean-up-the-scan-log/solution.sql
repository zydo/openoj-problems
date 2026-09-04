SELECT
  LOWER(TRIM(item_name)) AS item_name,
  strftime('%Y-%m', scan_date) AS scan_date,
  COUNT(*) AS units
FROM
  Scans
GROUP BY
  LOWER(TRIM(item_name)),
  strftime('%Y-%m', scan_date)
ORDER BY
  item_name ASC,
  scan_date ASC