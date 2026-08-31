SELECT
  staff_id,
  name,
  CASE gender
    WHEN 'm' THEN 'f'
    ELSE 'm'
  END AS gender,
  pay
FROM
  StaffRecord