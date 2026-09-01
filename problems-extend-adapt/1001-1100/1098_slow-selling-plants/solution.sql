SELECT
  p.plant_id,
  p.name
FROM
  Plants p
WHERE
  p.listed_on <= '2019-05-23'
  AND (
    SELECT
      COALESCE(SUM(s.quantity), 0)
    FROM
      Shipments s
    WHERE
      s.plant_id = p.plant_id
      AND s.shipped_on >= '2018-06-23'
      AND s.shipped_on <= '2019-06-23'
  ) < 10