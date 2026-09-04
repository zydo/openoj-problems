SELECT
  node,
  CASE
    WHEN parent IS NULL THEN 'Root'
    WHEN node NOT IN (
      SELECT
        parent
      FROM
        Nodes
      WHERE
        parent IS NOT NULL
    ) THEN 'Leaf'
    ELSE 'Inner'
  END AS Type
FROM
  Nodes
ORDER BY
  node