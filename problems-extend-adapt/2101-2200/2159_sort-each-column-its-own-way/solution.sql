WITH
  first_ranked AS (
    SELECT
      left_value,
      ROW_NUMBER() OVER (
        ORDER BY
          left_value
      ) AS row_num
    FROM
      Pairs
  ),
  second_ranked AS (
    SELECT
      right_value,
      ROW_NUMBER() OVER (
        ORDER BY
          right_value DESC
      ) AS row_num
    FROM
      Pairs
  )
SELECT
  first_ranked.left_value,
  second_ranked.right_value
FROM
  first_ranked
  JOIN second_ranked ON first_ranked.row_num = second_ranked.row_num
ORDER BY
  first_ranked.row_num