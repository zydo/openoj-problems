SELECT
  name,
  bonus
FROM
  Staff
  LEFT JOIN Payout ON Staff.staffId = Payout.staffId
WHERE
  bonus < 1000
  OR bonus IS NULL