SELECT
  guest_id,
  COUNT(*) AS ticket_count,
  ROUND(100.0 * SUM(is_rush) / COUNT(*), 2) AS rush_share,
  ROUND(SUM(star_score) * 1.0 / COUNT(star_score), 2) AS avg_stars
FROM
  (
    SELECT
      guest_id,
      star_score,
      CASE
        WHEN strftime('%H:%M:%S', served_at) >= '11:00:00'
        AND strftime('%H:%M:%S', served_at) < '14:00:00' THEN 1
        WHEN strftime('%H:%M:%S', served_at) >= '18:00:00'
        AND strftime('%H:%M:%S', served_at) < '21:00:00' THEN 1
        ELSE 0
      END AS is_rush
    FROM
      diner_tickets
  )
GROUP BY
  guest_id
HAVING
  COUNT(*) >= 3
  AND 5 * SUM(is_rush) >= 3 * COUNT(*)
  AND 2 * COUNT(star_score) >= COUNT(*)
  AND SUM(star_score) >= 4 * COUNT(star_score)
ORDER BY
  avg_stars DESC,
  guest_id DESC