SELECT
  region,
  GROUP_CONCAT(
    town,
    ', '
    ORDER BY
      town
  ) AS roster
FROM
  Towns
GROUP BY
  region
ORDER BY
  region