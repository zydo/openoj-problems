SELECT
  donor,
  amount,
  amount * 2 AS match_amount
FROM
  Donations
ORDER BY
  donation_slot ASC