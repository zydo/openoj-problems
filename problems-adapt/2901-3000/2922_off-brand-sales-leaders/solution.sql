SELECT
  o.seller_id,
  COUNT(DISTINCT o.listing_id) AS distinct_listings
FROM
  Sales o
  JOIN Listings i ON o.listing_id = i.listing_id
  JOIN Sellers u ON o.seller_id = u.seller_id
WHERE
  i.listing_brand <> u.preferred_brand
GROUP BY
  o.seller_id
HAVING
  COUNT(DISTINCT o.listing_id) = (
    SELECT
      MAX(inner_counts.cnt)
    FROM
      (
        SELECT
          COUNT(DISTINCT o2.listing_id) AS cnt
        FROM
          Sales o2
          JOIN Listings i2 ON o2.listing_id = i2.listing_id
          JOIN Sellers u2 ON o2.seller_id = u2.seller_id
        WHERE
          i2.listing_brand <> u2.preferred_brand
        GROUP BY
          o2.seller_id
      ) AS inner_counts
  )
ORDER BY
  o.seller_id