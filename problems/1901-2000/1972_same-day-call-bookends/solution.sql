WITH
  unfolded AS (
    SELECT
      origin_id AS user_id,
      target_id AS other_id,
      placed_at
    FROM
      PhoneLog
    UNION ALL
    SELECT
      target_id AS user_id,
      origin_id AS other_id,
      placed_at
    FROM
      PhoneLog
  ),
  first_last AS (
    SELECT
      user_id,
      DATE(placed_at) AS day,
      MIN(placed_at) AS first_time,
      MAX(placed_at) AS last_time
    FROM
      unfolded
    GROUP BY
      user_id,
      DATE(placed_at)
  )
SELECT DISTINCT
  first_last.user_id
FROM
  first_last
  JOIN unfolded AS first_call ON first_call.user_id = first_last.user_id
  AND first_call.placed_at = first_last.first_time
  JOIN unfolded AS last_call ON last_call.user_id = first_last.user_id
  AND last_call.placed_at = first_last.last_time
WHERE
  first_call.other_id = last_call.other_id