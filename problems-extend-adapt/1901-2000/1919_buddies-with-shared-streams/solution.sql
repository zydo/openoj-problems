WITH
  common AS (
    SELECT DISTINCT
      l1.listener_id AS u1,
      l2.listener_id AS u2,
      l1.day AS d,
      l1.track_id AS s
    FROM
      Streams l1
      JOIN Streams l2 ON l1.track_id = l2.track_id
      AND l1.day = l2.day
      AND l1.listener_id < l2.listener_id
  ),
  qualifying AS (
    SELECT
      u1,
      u2
    FROM
      common
    GROUP BY
      u1,
      u2,
      d
    HAVING
      COUNT(DISTINCT s) >= 3
  )
SELECT DISTINCT
  q.u1 AS buddy1_id,
  q.u2 AS buddy2_id
FROM
  qualifying q
  JOIN Buddies f ON f.buddy1_id = q.u1
  AND f.buddy2_id = q.u2