WITH
  ranked AS (
    SELECT
      member_id,
      gender,
      ROW_NUMBER() OVER (
        PARTITION BY
          gender
        ORDER BY
          member_id
      ) AS rn
    FROM
      Members
  )
SELECT
  member_id,
  gender
FROM
  ranked
ORDER BY
  rn,
  CASE gender
    WHEN 'female' THEN 0
    WHEN 'other' THEN 1
    ELSE 2
  END