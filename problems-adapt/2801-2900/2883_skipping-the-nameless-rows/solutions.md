# Solutions — Skipping The Nameless Rows

## Keep the named rows, in seat order

The `ClassRoster` table already holds one row per roster entry, so
skipping the nameless rows is a filtered scan of that table.
`WHERE student_name IS NOT NULL` keeps exactly the rows that have a
name and discards every row whose name is `NULL` — the only column
that can be missing here. Naming `student_no`, `student_name`,
`student_age` in the SELECT list, rather than `SELECT *`, keeps `seat`
out of the result, so the answer is the roster's own three data
columns.

A table guarantees no order of its own, so the query sorts by `seat`
with `ORDER BY seat ASC` to reproduce the roster's original row order
no matter what order the dataset's INSERT statements used: identity
inserts, reversed inserts, and shuffled inserts all collapse to the
same output. The filter is row-wise, so survivors keep their relative
order — dropping one row never shifts another row's place in the
output.

**Complexity:** `O(n log n)` time, `O(n)` space — the `n` roster rows
are read, filtered, and ordered by `seat`, and the result holds the
surviving rows.
