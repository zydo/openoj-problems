SELECT
  r.parcel_id AS parcel_id,
  r.year AS year,
  COALESCE(v.value, 0) AS value
FROM
  Lookups r
  LEFT JOIN Valuations v ON r.parcel_id = v.parcel_id
  AND r.year = v.year