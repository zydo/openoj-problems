SELECT
  staff_id
FROM
  Staff
WHERE
  wage < 30000
  AND boss_id IS NOT NULL
  AND boss_id NOT IN (
    SELECT
      staff_id
    FROM
      Staff
  )
ORDER BY
  staff_id