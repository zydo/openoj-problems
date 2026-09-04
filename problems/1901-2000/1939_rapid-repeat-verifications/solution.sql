SELECT DISTINCT
  c1.member_id
FROM
  Verifications c1
  JOIN Verifications c2 ON c1.member_id = c2.member_id
  AND c1.sent_at < c2.sent_at
  AND strftime('%s', c2.sent_at) - strftime('%s', c1.sent_at) <= 86400