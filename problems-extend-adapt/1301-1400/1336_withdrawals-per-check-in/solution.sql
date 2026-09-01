WITH
  per_checkin AS (
    SELECT
      v.member_id AS member_id,
      v.checkin_date AS checkin_date,
      COUNT(w.amount) AS cnt
    FROM
      Checkins v
      LEFT JOIN Withdrawals w ON w.member_id = v.member_id
      AND w.made_on = v.checkin_date
    GROUP BY
      v.member_id,
      v.checkin_date
  ),
  tally AS (
    SELECT
      0 AS n
    UNION ALL
    SELECT
      n + 1
    FROM
      tally
    WHERE
      n + 1 <= (
        SELECT
          MAX(cnt)
        FROM
          per_checkin
      )
  )
SELECT
  tally.n AS withdrawals_count,
  (
    SELECT
      COUNT(*)
    FROM
      per_checkin
    WHERE
      per_checkin.cnt = tally.n
  ) AS checkins_count
FROM
  tally
ORDER BY
  withdrawals_count