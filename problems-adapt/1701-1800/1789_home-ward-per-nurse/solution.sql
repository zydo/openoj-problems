SELECT
  nurse_id,
  ward_id
FROM
  Nurses
WHERE
  home_flag = 'Y'
  OR nurse_id IN (
    SELECT
      nurse_id
    FROM
      Nurses
    GROUP BY
      nurse_id
    HAVING
      COUNT(*) = 1
  )