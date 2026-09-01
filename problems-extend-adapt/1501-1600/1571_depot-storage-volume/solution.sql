SELECT
  d.name AS depot_name,
  SUM(d.quantity * c.width * c.length * c.height) AS cubic_feet
FROM
  Depot d
  JOIN Crates c ON c.crate_id = d.crate_id
GROUP BY
  d.name