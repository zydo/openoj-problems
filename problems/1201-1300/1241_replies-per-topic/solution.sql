WITH
  topics AS (
    SELECT DISTINCT
      entry_id AS topic_id
    FROM
      Feedback
    WHERE
      reply_to IS NULL
  ),
  replies AS (
    SELECT DISTINCT
      reply_to AS topic_id,
      entry_id AS reply_id
    FROM
      Feedback
    WHERE
      reply_to IS NOT NULL
  )
SELECT
  p.topic_id,
  COUNT(c.reply_id) AS reply_count
FROM
  topics p
  LEFT JOIN replies c ON c.topic_id = p.topic_id
GROUP BY
  p.topic_id
ORDER BY
  p.topic_id ASC