SELECT
  p.resident_id,
  p.resident_name,
  p.age,
  CAST(
    JULIANDAY(neg.first_negative) - JULIANDAY(pos.first_positive) AS INTEGER
  ) AS days_to_clear
FROM
  residents p
  JOIN (
    SELECT
      resident_id,
      MIN(swab_date) AS first_positive
    FROM
      swab_tests
    WHERE
      finding = 'Positive'
    GROUP BY
      resident_id
  ) pos ON pos.resident_id = p.resident_id
  JOIN (
    SELECT
      t.resident_id,
      MIN(t.swab_date) AS first_negative
    FROM
      swab_tests t
    WHERE
      t.finding = 'Negative'
      AND t.swab_date > (
        SELECT
          MIN(c.swab_date)
        FROM
          swab_tests c
        WHERE
          c.resident_id = t.resident_id
          AND c.finding = 'Positive'
      )
    GROUP BY
      t.resident_id
  ) neg ON neg.resident_id = p.resident_id
ORDER BY
  days_to_clear ASC,
  p.resident_name ASC