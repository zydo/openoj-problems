SELECT
  CASE
    WHEN desk_id % 2 = 1
    AND desk_id < (
      SELECT
        MAX(desk_id)
      FROM
        DeskAssignment
    ) THEN desk_id + 1
    WHEN desk_id % 2 = 1 THEN desk_id
    ELSE desk_id - 1
  END AS desk_id,
  learner
FROM
  DeskAssignment
ORDER BY
  desk_id ASC