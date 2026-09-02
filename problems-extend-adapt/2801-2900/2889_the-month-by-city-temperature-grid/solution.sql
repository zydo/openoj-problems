SELECT
  group_concat(
    'max(CASE WHEN city_name = ' || quote(city_name) || ' THEN temp END) AS "' || replace(city_name, '"', '""') || '"',
    ','
    ORDER BY
      city_name
  )
FROM
  (
    SELECT DISTINCT
      city_name
    FROM
      Readings
  );

SELECT
  month_name,
  __COLUMNS__
FROM
  Readings
GROUP BY
  month_name
ORDER BY
  month_name