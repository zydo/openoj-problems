SELECT
  node_id,
  CASE
    WHEN parent_node_id IS NULL THEN 'Root'
    WHEN node_id NOT IN (
      SELECT
        parent_node_id
      FROM
        ReportingTree
      WHERE
        parent_node_id IS NOT NULL
    ) THEN 'Leaf'
    ELSE 'Inner'
  END AS role
FROM
  ReportingTree