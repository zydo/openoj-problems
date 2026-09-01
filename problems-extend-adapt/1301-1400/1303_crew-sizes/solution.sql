SELECT
  member_id,
  COUNT(*) OVER (
    PARTITION BY
      crew_id
  ) AS crew_size
FROM
  Crew