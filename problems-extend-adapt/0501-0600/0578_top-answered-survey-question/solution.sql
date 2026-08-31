SELECT
  prompt_id AS poll_id
FROM
  PollLog
GROUP BY
  prompt_id
HAVING
  SUM(
    CASE
      WHEN action = 'show' THEN 1
      ELSE 0
    END
  ) > 0
ORDER BY
  SUM(
    CASE
      WHEN action = 'answer' THEN 1
      ELSE 0
    END
  ) * 1.0 / SUM(
    CASE
      WHEN action = 'show' THEN 1
      ELSE 0
    END
  ) DESC,
  prompt_id
LIMIT
  1