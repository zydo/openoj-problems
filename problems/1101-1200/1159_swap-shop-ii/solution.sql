SELECT
  m.member_id AS seller_id,
  COALESCE(s.fav, 'no') AS second_trade_fav
FROM
  Members m
  LEFT JOIN (
    SELECT
      seller_id,
      CASE
        WHEN l.listing_brand = m2.preferred_brand THEN 'yes'
        ELSE 'no'
      END AS fav
    FROM
      (
        SELECT
          seller_id,
          listing_id,
          ROW_NUMBER() OVER (
            PARTITION BY
              seller_id
            ORDER BY
              trade_date
          ) AS rn
        FROM
          Trades
      ) ranked
      JOIN Listings l ON l.listing_id = ranked.listing_id
      JOIN Members m2 ON m2.member_id = ranked.seller_id
    WHERE
      ranked.rn = 2
  ) s ON s.seller_id = m.member_id