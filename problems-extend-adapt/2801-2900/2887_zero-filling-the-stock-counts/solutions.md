# Solutions — Zero-Filling The Stock Counts

## Fill the missing counts with 0 in the SELECT list, in row order

The `Stockroom` table already holds one row per item, so closing the
count gaps is a projection, not a stored mutation: the SELECT list
names `item_name` and `unit_price` unchanged, and the second entry
computes `COALESCE(stock_count, 0) AS stock_count`, which evaluates to
each row's own stored count when one is present and to `0` when it is
`NULL`. Aliasing the expression as `stock_count` keeps the output's
column name and position identical to the stockroom's original layout,
and no other column can be missing, so `COALESCE` over the one
nullable column is the whole fill. The fill is row-wise, so it never
adds or removes a row: the output has exactly one row per stockroom
row, even when every count is missing — unlike dropping the affected
rows, which would shrink the table.

A table guarantees no order of its own, so the query sorts by
`row_no` with `ORDER BY row_no ASC` to reproduce the stockroom's
original row order no matter what order the dataset's INSERT
statements used: identity inserts, reversed inserts, and shuffled
inserts all collapse to the same output.

**Complexity:** `O(n log n)` time, `O(n)` space — the `n` rows are
scanned, filled, and ordered by `row_no`, and the result table itself
holds all `n` rows.
