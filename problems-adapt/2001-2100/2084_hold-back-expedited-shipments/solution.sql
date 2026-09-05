SELECT
  sh.shipment_id,
  sh.customer_id,
  sh.shipment_kind
FROM
  Shipments AS sh
WHERE
  sh.shipment_kind = 0
  OR NOT EXISTS (
    SELECT
      1
    FROM
      Shipments AS regular
    WHERE
      regular.customer_id = sh.customer_id
      AND regular.shipment_kind = 0
  )