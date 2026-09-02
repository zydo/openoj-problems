# Solutions — Grades As Whole Numbers

## Convert the score column with CAST in the output

The `ScoreSheet` table already holds one row per exam record, so
delivering the scores as whole numbers is a projection, not a stored
mutation: the SELECT list carries `pupil_no`, `pupil_name`, and
`pupil_age` unchanged, and the fourth entry computes `CAST(score AS
INTEGER) AS score`, which re-types each row's own score. SQLite's cast
truncates the stored `REAL` toward zero, so `88.5` becomes `88` and
`79.9` becomes `79` — the fractional part is dropped, exactly the
whole-number conversion the statement asks for. Aliasing the
expression as `score` keeps the output's column name and position
identical to the sheet's original layout.

A table guarantees no order of its own, so the query sorts by
`row_no` with `ORDER BY row_no ASC` to reproduce the sheet's original
row order no matter what order the dataset's INSERT statements used:
identity inserts, reversed inserts, and shuffled inserts all collapse
to the same output.

**Complexity:** `O(n log n)` time, `O(n)` space — the `n` rows are
scanned and ordered by `row_no`, and the result table itself holds all
`n` converted rows.
