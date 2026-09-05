SELECT
  r.courier_id AS courier_id,
  COUNT(DISTINCT p.delivery_id) AS recipient_cnt
FROM
  Deliveries r
  LEFT JOIN Deliveries p ON r.courier_id = p.recipient_id
GROUP BY
  r.courier_id