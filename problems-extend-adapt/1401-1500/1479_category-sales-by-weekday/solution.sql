SELECT
  w.ware_category AS Category,
  SUM(
    CASE
      WHEN STRFTIME('%w', t.sale_date) = '1' THEN t.quantity
      ELSE 0
    END
  ) AS Monday,
  SUM(
    CASE
      WHEN STRFTIME('%w', t.sale_date) = '2' THEN t.quantity
      ELSE 0
    END
  ) AS Tuesday,
  SUM(
    CASE
      WHEN STRFTIME('%w', t.sale_date) = '3' THEN t.quantity
      ELSE 0
    END
  ) AS Wednesday,
  SUM(
    CASE
      WHEN STRFTIME('%w', t.sale_date) = '4' THEN t.quantity
      ELSE 0
    END
  ) AS Thursday,
  SUM(
    CASE
      WHEN STRFTIME('%w', t.sale_date) = '5' THEN t.quantity
      ELSE 0
    END
  ) AS Friday,
  SUM(
    CASE
      WHEN STRFTIME('%w', t.sale_date) = '6' THEN t.quantity
      ELSE 0
    END
  ) AS Saturday,
  SUM(
    CASE
      WHEN STRFTIME('%w', t.sale_date) = '0' THEN t.quantity
      ELSE 0
    END
  ) AS Sunday
FROM
  Wares w
  LEFT JOIN Transactions t ON w.ware_id = t.ware_id
GROUP BY
  w.ware_category
ORDER BY
  w.ware_category