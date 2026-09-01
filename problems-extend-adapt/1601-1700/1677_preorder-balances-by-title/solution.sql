SELECT
  p.name,
  COALESCE(t.due, 0) AS due,
  COALESCE(t.paid, 0) AS paid,
  COALESCE(t.canceled, 0) AS canceled,
  COALESCE(t.refunded, 0) AS refunded
FROM
  Titles p
  LEFT JOIN (
    SELECT
      title_id,
      SUM(due) AS due,
      SUM(paid) AS paid,
      SUM(canceled) AS canceled,
      SUM(refunded) AS refunded
    FROM
      Preorders
    GROUP BY
      title_id
  ) t ON t.title_id = p.title_id
ORDER BY
  p.name