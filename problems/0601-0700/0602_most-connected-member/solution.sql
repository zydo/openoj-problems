WITH
  connections AS (
    SELECT
      sender_id AS member_id
    FROM
      ConfirmedLinks
    UNION ALL
    SELECT
      recipient_id AS member_id
    FROM
      ConfirmedLinks
  )
SELECT
  member_id,
  COUNT(*) AS connection_total
FROM
  connections
GROUP BY
  member_id
ORDER BY
  connection_total DESC
LIMIT
  1