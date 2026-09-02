SELECT
  signup_id,
  subscriber_name,
  address
FROM
  Subscribers
WHERE
  signup_id IN (
    SELECT
      MIN(signup_id)
    FROM
      Subscribers
    GROUP BY
      address
  )
ORDER BY
  signup_id