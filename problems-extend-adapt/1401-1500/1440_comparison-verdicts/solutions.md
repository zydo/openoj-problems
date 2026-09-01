# Solutions — Comparison Verdicts

## Two joins and a CASE

A `Comparisons` row stores names, not numbers, so the first job is to
pull both stored values in: alias `Symbols` once as `ls` joined on
`left_name` and once as `rs` joined on `right_name`. Both names are
guaranteed present, and `name` is the table's primary key, so inner
joins keep exactly one row per comparison — neither join can duplicate
or drop.

With `ls.value` and `rs.value` on the same row, the outcome is a
three-arm `CASE` on `op`: `'>'` compares `ls.value > rs.value`, `'<'`
the reverse, `'='` equality; whichever arm fires decides between
`'true'` and `'false'`. Every comparison row flows through untouched —
the output carries the three input columns plus the verdict — and row
order stays free.

**Complexity:** `O(C + S)` time for the two joins over the tables,
`O(C)` space for the result.
