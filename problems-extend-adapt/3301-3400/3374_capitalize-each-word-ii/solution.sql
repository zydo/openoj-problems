WITH RECURSIVE
  walk (note_id, txt, pos, prev_alpha, built) AS (
    SELECT
      note_id,
      note_text,
      1,
      0,
      ''
    FROM
      notes
    UNION ALL
    SELECT
      note_id,
      txt,
      pos + 1,
      CASE
        WHEN SUBSTR(txt, pos, 1) GLOB '[a-zA-Z]' THEN 1
        ELSE 0
      END,
      built || CASE
        WHEN SUBSTR(txt, pos, 1) GLOB '[a-zA-Z]' THEN CASE
          WHEN prev_alpha = 1 THEN LOWER(SUBSTR(txt, pos, 1))
          ELSE UPPER(SUBSTR(txt, pos, 1))
        END
        ELSE SUBSTR(txt, pos, 1)
      END
    FROM
      walk
    WHERE
      pos <= LENGTH(txt)
  )
SELECT
  note_id,
  txt AS original_text,
  built AS converted_text
FROM
  walk
WHERE
  pos = LENGTH(txt) + 1