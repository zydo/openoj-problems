SELECT
  c1.id AS id,
  COALESCE(
    c1.item,
    (
      SELECT
        c2.item
      FROM
        GroceryRun c2
      WHERE
        c2.id < c1.id
        AND c2.item IS NOT NULL
      ORDER BY
        c2.id DESC
      LIMIT
        1
    )
  ) AS item
FROM
  GroceryRun c1
ORDER BY
  id ASC