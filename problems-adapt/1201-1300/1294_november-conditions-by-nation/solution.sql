SELECT
  c.nation_name,
  CASE
    WHEN ROUND(AVG(w.condition_level)) <= 15 THEN 'Cold'
    WHEN ROUND(AVG(w.condition_level)) >= 25 THEN 'Hot'
    ELSE 'Warm'
  END AS condition_type
FROM
  Conditions w
  JOIN Nations c ON c.nation_id = w.nation_id
WHERE
  w.condition_day BETWEEN '2019-11-01' AND '2019-11-30'
GROUP BY
  c.nation_id,
  c.nation_name