WITH
  per_member AS (
    SELECT
      member_id,
      COUNT(DISTINCT post_id) AS post_cnt,
      COUNT(*) AS emoji_cnt
    FROM
      EmojiLog
    GROUP BY
      member_id
  ),
  per_emoji AS (
    SELECT
      member_id,
      emoji,
      COUNT(*) AS cnt
    FROM
      EmojiLog
    GROUP BY
      member_id,
      emoji
  )
SELECT
  p.member_id,
  r.emoji AS dominant_emoji,
  ROUND(r.cnt * 1.0 / p.emoji_cnt, 2) AS emoji_ratio
FROM
  per_member AS p
  JOIN per_emoji AS r ON r.member_id = p.member_id
WHERE
  p.post_cnt >= 5
  AND r.cnt * 1.0 / p.emoji_cnt >= 0.6
ORDER BY
  emoji_ratio DESC,
  p.member_id ASC