WITH
  totals AS (
    SELECT
      homework1 + homework2 + homework3 AS total_score
    FROM
      Gradebook
  )
SELECT
  MAX(total_score) - MIN(total_score) AS score_spread
FROM
  totals