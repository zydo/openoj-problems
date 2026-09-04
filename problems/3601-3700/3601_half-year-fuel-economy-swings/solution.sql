SELECT
  courier_id,
  courier_name,
  ROUND(
    AVG(
      CASE
        WHEN m <= 6 THEN eff
      END
    ),
    2
  ) AS first_half_mean,
  ROUND(
    AVG(
      CASE
        WHEN m >= 7 THEN eff
      END
    ),
    2
  ) AS second_half_mean,
  ROUND(
    AVG(
      CASE
        WHEN m >= 7 THEN eff
      END
    ) - AVG(
      CASE
        WHEN m <= 6 THEN eff
      END
    ),
    2
  ) AS economy_gain
FROM
  (
    SELECT
      d.courier_id AS courier_id,
      d.courier_name AS courier_name,
      CAST(strftime('%m', t.delivery_date) AS INTEGER) AS m,
      t.km_driven / t.fuel_used AS eff
    FROM
      couriers d
      JOIN deliveries t ON t.courier_id = d.courier_id
  )
GROUP BY
  courier_id,
  courier_name
HAVING
  SUM(m <= 6) > 0
  AND SUM(m >= 7) > 0
ORDER BY
  economy_gain DESC,
  courier_name ASC