WITH
  firsts AS (
    SELECT
      member_id,
      session_kind,
      ROW_NUMBER() OVER (
        PARTITION BY
          member_id
        ORDER BY
          started_at,
          log_id
      ) AS rn
    FROM
      StreamLog
  ),
  totals AS (
    SELECT
      member_id,
      COUNT(*) AS stream_count
    FROM
      StreamLog
    WHERE
      session_kind = 'Streamer'
    GROUP BY
      member_id
  )
SELECT
  f.member_id,
  t.stream_count
FROM
  firsts f
  JOIN totals t ON t.member_id = f.member_id
WHERE
  f.rn = 1
  AND f.session_kind = 'Viewer'
ORDER BY
  t.stream_count DESC,
  f.member_id DESC