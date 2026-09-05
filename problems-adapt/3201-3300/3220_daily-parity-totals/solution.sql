SELECT
  posted_on,
  SUM(
    CASE
      WHEN amount % 2 = 1 THEN amount
      ELSE 0
    END
  ) AS odd_total,
  SUM(
    CASE
      WHEN amount % 2 = 0 THEN amount
      ELSE 0
    END
  ) AS even_total
FROM
  ledger_entries
GROUP BY
  posted_on
ORDER BY
  posted_on