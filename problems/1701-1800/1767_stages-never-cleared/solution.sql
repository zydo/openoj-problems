WITH RECURSIVE
  expected (pipeline_id, stage_id) AS (
    SELECT
      pipeline_id,
      1
    FROM
      Pipelines
    UNION ALL
    SELECT
      e.pipeline_id,
      e.stage_id + 1
    FROM
      expected e
      JOIN Pipelines t ON t.pipeline_id = e.pipeline_id
    WHERE
      e.stage_id < t.stage_count
  )
SELECT
  e.pipeline_id AS pipeline_id,
  e.stage_id AS stage_id
FROM
  expected e
  LEFT JOIN Cleared x ON x.pipeline_id = e.pipeline_id
  AND x.stage_id = e.stage_id
WHERE
  x.pipeline_id IS NULL
ORDER BY
  e.pipeline_id,
  e.stage_id