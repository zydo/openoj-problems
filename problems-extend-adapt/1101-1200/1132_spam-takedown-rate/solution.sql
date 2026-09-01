SELECT
  ROUND(AVG(daily_percent), 2) AS average_daily_percent
FROM
  (
    SELECT
      a.event_date,
      100.0 * COUNT(
        DISTINCT CASE
          WHEN r.post_id IS NOT NULL THEN a.post_id
        END
      ) / COUNT(DISTINCT a.post_id) AS daily_percent
    FROM
      Interactions a
      LEFT JOIN Takedowns r ON r.post_id = a.post_id
    WHERE
      a.action = 'report'
      AND a.detail = 'spam'
    GROUP BY
      a.event_date
  ) AS per_day