WITH
  port_flow AS (
    SELECT
      origin_port AS port_id,
      voyage_count
    FROM
      CargoRoutes
    UNION ALL
    SELECT
      destination_port AS port_id,
      voyage_count
    FROM
      CargoRoutes
  ),
  totals AS (
    SELECT
      port_id,
      SUM(voyage_count) AS flow
    FROM
      port_flow
    GROUP BY
      port_id
  )
SELECT
  port_id
FROM
  totals
WHERE
  flow = (
    SELECT
      MAX(flow)
    FROM
      totals
  )