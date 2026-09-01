SELECT
  l.lot_name,
  l.lot_id,
  b.bid_id,
  b.bid_date
FROM
  Bids b
  JOIN Lots l ON l.lot_id = b.lot_id
WHERE
  b.bid_date = (
    SELECT
      MAX(b2.bid_date)
    FROM
      Bids b2
    WHERE
      b2.lot_id = b.lot_id
  )
ORDER BY
  lot_name ASC,
  l.lot_id ASC,
  b.bid_id ASC