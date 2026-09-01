SELECT
  w.account_id,
  COUNT(*) AS count_no_topup
FROM
  Walkins w
  LEFT JOIN Topups t ON t.walkin_id = w.walkin_id
WHERE
  t.topup_id IS NULL
GROUP BY
  w.account_id