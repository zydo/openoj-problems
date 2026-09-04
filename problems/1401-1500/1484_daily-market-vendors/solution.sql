SELECT
  market_date,
  COUNT(DISTINCT vendor) AS vendor_count,
  GROUP_CONCAT(
    DISTINCT vendor
    ORDER BY
      vendor
  ) AS vendors
FROM
  Vendors
GROUP BY
  market_date
ORDER BY
  market_date