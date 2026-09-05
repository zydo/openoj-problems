SELECT
  sold_on,
  SUM(
    CASE
      WHEN fruit = 'apples' THEN crates
      ELSE - crates
    END
  ) AS balance
FROM
  Stall
GROUP BY
  sold_on
ORDER BY
  sold_on