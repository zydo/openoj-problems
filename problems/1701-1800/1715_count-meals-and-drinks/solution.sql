SELECT
  COALESCE(SUM(b.meal_count + COALESCE(c.meal_count, 0)), 0) AS meal_count,
  COALESCE(
    SUM(b.drink_count + COALESCE(c.drink_count, 0)),
    0
  ) AS drink_count
FROM
  Tickets b
  LEFT JOIN Combos c ON b.combo_id = c.combo_id