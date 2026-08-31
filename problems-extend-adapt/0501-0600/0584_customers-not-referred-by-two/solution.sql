SELECT
  guest_name
FROM
  Guest
WHERE
  referrer_id IS NULL
  OR referrer_id != 2