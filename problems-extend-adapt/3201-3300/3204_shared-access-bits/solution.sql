WITH RECURSIVE
  bits (b) AS (
    SELECT
      0
    UNION ALL
    SELECT
      b + 1
    FROM
      bits
    WHERE
      b < 30
  ),
  per_bit AS (
    SELECT
      b,
      MIN((mask >> b) & 1) AS and_bit,
      MAX((mask >> b) & 1) AS or_bit
    FROM
      staff_grants
      CROSS JOIN bits
    GROUP BY
      b
  )
SELECT
  SUM(and_bit << b) AS all_bits,
  SUM(or_bit << b) AS any_bits
FROM
  per_bit