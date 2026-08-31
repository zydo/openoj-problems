SELECT
  mentor,
  COUNT(*) AS mentee_count
FROM
  Mentorship
WHERE
  mentor IN (
    SELECT
      mentee
    FROM
      Mentorship
  )
GROUP BY
  mentor
ORDER BY
  mentor ASC