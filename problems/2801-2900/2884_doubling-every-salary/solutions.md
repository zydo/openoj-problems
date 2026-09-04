# Solutions — Doubling Every Salary

## Double the wage column in the projection

The `StaffWages` table already holds one row per staff member, so
doubling every salary is a projection, not a stored mutation: the
SELECT list names `staff_name` unchanged, and the second entry
computes `annual_wage * 2 AS annual_wage`, which doubles each row's
own wage. Aliasing the expression as `annual_wage` keeps the output's
column name and position identical to the wage list the statement
asks for.

A table guarantees no order of its own, so the query sorts by
`row_no` with `ORDER BY row_no ASC` to reproduce the wage list's
original row order no matter what order the dataset's INSERT
statements used: identity inserts, reversed inserts, and shuffled
inserts all collapse to the same output.

**Complexity:** `O(n log n)` time, `O(n)` space — the `n` rows are
scanned and ordered by `row_no`, and the result table itself holds all
`n` adjusted rows.
