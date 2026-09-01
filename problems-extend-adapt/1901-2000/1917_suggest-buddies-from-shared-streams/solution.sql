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
  ),
  pairs AS (
    SELECT DISTINCT
      q.u1,
      q.u2
    FROM
      qualifying q
    WHERE
      NOT EXISTS (
        SELECT
          1
        FROM
          Buddies f
        WHERE
          f.buddy1_id = q.u1
          AND f.buddy2_id = q.u2
      )
  )
SELECT
  u1 AS listener_id,
  u2 AS suggested_id
FROM
  pairs
UNION ALL
SELECT
  u2 AS listener_id,
  u1 AS suggested_id
FROM
  pairs