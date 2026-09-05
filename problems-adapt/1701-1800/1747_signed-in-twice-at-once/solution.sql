SELECT DISTINCT
  a.user_id AS user_id
FROM
  AccessLog a
  JOIN AccessLog b ON a.user_id = b.user_id
  AND a.ip_address != b.ip_address
  AND a.signed_in <= b.signed_out
  AND a.signed_out >= b.signed_in