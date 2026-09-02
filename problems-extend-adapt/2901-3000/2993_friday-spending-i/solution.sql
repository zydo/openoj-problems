SELECT
  (CAST(strftime('%d', spend_date) AS INTEGER) + 6) / 7 AS week_of_month,
  spend_date,
  SUM(spend_amount) AS total_amount
FROM
  SpendLog
WHERE
  strftime('%w', spend_date) = '5'
GROUP BY
  spend_date
ORDER BY
  week_of_month