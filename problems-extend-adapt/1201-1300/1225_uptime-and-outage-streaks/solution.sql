WITH
  days AS (
    SELECT
      outage_day AS d,
      'failed' AS run_state
    FROM
      Outages
    WHERE
      outage_day BETWEEN '2019-01-01' AND '2019-12-31'
    UNION ALL
    SELECT
      pass_day,
      'succeeded'
    FROM
      Passes
    WHERE
      pass_day BETWEEN '2019-01-01' AND '2019-12-31'
  ),
  ordered AS (
    SELECT
      d,
      run_state,
      ROW_NUMBER() OVER (
        ORDER BY
          d
      ) - ROW_NUMBER() OVER (
        PARTITION BY
          run_state
        ORDER BY
          d
      ) AS island
    FROM
      days
  )
SELECT
  run_state,
  MIN(d) AS start_day,
  MAX(d) AS end_day
FROM
  ordered
GROUP BY
  run_state,
  island
ORDER BY
  start_day