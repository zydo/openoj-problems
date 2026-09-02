SELECT
  GROUP_CONCAT(piece, '') || '=0' AS expression
FROM
  (
    SELECT
      CASE
        WHEN coefficient > 0 THEN '+'
        ELSE '-'
      END || ABS(coefficient) || CASE
        WHEN exponent = 0 THEN ''
        WHEN exponent = 1 THEN 'X'
        ELSE 'X^' || exponent
      END AS piece
    FROM
      Monomials
    ORDER BY
      exponent DESC
  )