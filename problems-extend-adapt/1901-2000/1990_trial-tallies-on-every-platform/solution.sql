SELECT
  p.platform,
  e.trial_name,
  COUNT(x.trial_id) AS trial_count
FROM
  (
    SELECT
      'Android' AS platform
    UNION
    SELECT
      'IOS'
    UNION
    SELECT
      'Web'
  ) p
  CROSS JOIN (
    SELECT
      'Reading' AS trial_name
    UNION
    SELECT
      'Sports'
    UNION
    SELECT
      'Programming'
  ) e
  LEFT JOIN Trials x ON x.platform = p.platform
  AND x.trial_name = e.trial_name
GROUP BY
  p.platform,
  e.trial_name