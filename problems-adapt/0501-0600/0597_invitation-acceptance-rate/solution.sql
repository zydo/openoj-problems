WITH
  requests AS (
    SELECT
      COUNT(*) AS n
    FROM
      (
        SELECT DISTINCT
          sender_id,
          recipient_id
        FROM
          Invitation
      )
  ),
  accepts AS (
    SELECT
      COUNT(*) AS n
    FROM
      (
        SELECT DISTINCT
          requester_id,
          accepter_id
        FROM
          Acceptance
      )
  )
SELECT
  ROUND(
    COALESCE(accepts.n * 1.0 / NULLIF(requests.n, 0), 0),
    2
  ) AS accept_rate
FROM
  requests
  CROSS JOIN accepts