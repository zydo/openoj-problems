SELECT
  group_concat(
    'max(CASE WHEN seller = ' || quote(seller) || ' THEN offer END) AS "' || replace(seller, '"', '""') || '"',
    ','
    ORDER BY
      seller
  )
FROM
  (
    SELECT DISTINCT
      seller
    FROM
      Offers
  );

SELECT
  item_id,
  __COLUMNS__
FROM
  Offers
GROUP BY
  item_id
ORDER BY
  item_id