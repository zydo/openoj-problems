SELECT
  s.name AS sender_name,
  s.sender_id,
  p.parcel_id,
  p.ship_date
FROM
  (
    SELECT
      *,
      ROW_NUMBER() OVER (
        PARTITION BY
          sender_id
        ORDER BY
          ship_date DESC,
          parcel_id DESC
      ) AS rn
    FROM
      Parcels
  ) p
  JOIN Senders s ON s.sender_id = p.sender_id
WHERE
  p.rn <= 3
ORDER BY
  sender_name ASC,
  s.sender_id ASC,
  ship_date DESC