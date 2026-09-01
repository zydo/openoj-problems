SELECT
  staff_id,
  CASE
    WHEN staff_id % 2 = 1
    AND SUBSTR(full_name, 1, 1) != 'M' THEN pay
    ELSE 0
  END AS payout
FROM
  Staff
ORDER BY
  staff_id ASC