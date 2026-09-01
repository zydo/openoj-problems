SELECT
  chart_id,
  patient,
  diagnoses
FROM
  Charts
WHERE
  diagnoses LIKE 'DIAB1%'
  OR diagnoses LIKE '% DIAB1%'