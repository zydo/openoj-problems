SELECT
  e.member_id
FROM
  Signups e
WHERE
  EXISTS (
    SELECT
      1
    FROM
      Messages t
    WHERE
      t.signup_id = e.signup_id
      AND t.action_kind = 'Verified'
      AND DATE(t.acted_at) = DATE(e.joined_at, '+1 day')
  )
ORDER BY
  e.member_id