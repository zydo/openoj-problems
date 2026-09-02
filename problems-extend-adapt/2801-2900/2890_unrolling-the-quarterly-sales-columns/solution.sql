SELECT
  product_name,
  quarter,
  sales
FROM
  (
    SELECT
      row_no,
      product_name,
      'quarter_1' AS quarter,
      quarter_1 AS sales
    FROM
      QuarterlySales
    UNION ALL
    SELECT
      row_no,
      product_name,
      'quarter_2' AS quarter,
      quarter_2 AS sales
    FROM
      QuarterlySales
    UNION ALL
    SELECT
      row_no,
      product_name,
      'quarter_3' AS quarter,
      quarter_3 AS sales
    FROM
      QuarterlySales
    UNION ALL
    SELECT
      row_no,
      product_name,
      'quarter_4' AS quarter,
      quarter_4 AS sales
    FROM
      QuarterlySales
  )
ORDER BY
  quarter ASC,
  row_no ASC