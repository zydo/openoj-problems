SELECT
  s.member_id,
  ROUND(COALESCE(AVG(c.outcome = 'confirmed'), 0), 2) AS verification_rate
FROM
  Registrations s
  LEFT JOIN Verifications c ON s.member_id = c.member_id
GROUP BY
  s.member_id