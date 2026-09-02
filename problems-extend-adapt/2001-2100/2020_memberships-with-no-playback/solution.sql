SELECT
  COUNT(*) AS member_count
FROM
  Memberships s
WHERE
  s.active_from <= '2021-12-31'
  AND s.active_to >= '2021-01-01'
  AND NOT EXISTS (
    SELECT
      1
    FROM
      Playbacks st
    WHERE
      st.member_id = s.member_id
      AND st.played_on >= '2021-01-01'
      AND st.played_on <= '2021-12-31'
  )