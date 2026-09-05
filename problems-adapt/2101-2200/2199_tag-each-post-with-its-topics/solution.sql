SELECT
  p.note_id,
  COALESCE(
    (
      SELECT
        GROUP_CONCAT(
          k.tag_id,
          ','
          ORDER BY
            k.tag_id
        )
      FROM
        (
          SELECT DISTINCT
            kw.tag_id AS tag_id
          FROM
            TagTerms kw
          WHERE
            instr(
              ' ' || lower(p.body) || ' ',
              ' ' || lower(kw.term) || ' '
            ) > 0
        ) k
    ),
    'Ambiguous!'
  ) AS tag_list
FROM
  Notes p