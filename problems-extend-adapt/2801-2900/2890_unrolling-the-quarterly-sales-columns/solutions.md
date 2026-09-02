# Solutions — Unrolling The Quarterly Sales Columns

## Fan the four quarter columns out with UNION ALL, then order the long result

Unrolling turns one wide row into one long row per quarter column, so
the compound select reads the seeded `QuarterlySales` table four times
— once per quarter. Every branch projects the same shape: the product
name, a quarter label written as a string literal (`'quarter_1'`,
`'quarter_2'`, `'quarter_3'`, `'quarter_4'`), and that column's value
aliased as `sales`, plus the `row_no` the ordering needs. `UNION ALL`
(not `UNION`) is required because unrolling keeps every fanned row even
when a product's quarters hold equal values, which
duplicate-eliminating `UNION` would silently collapse.

A table guarantees no order of its own, so the unrolled result must be
sorted explicitly. `ORDER BY quarter, row_no` orders the rows by the
quarter label, whose ascending lexicographic order is exactly the
`quarter_1` … `quarter_4` column order, and inside each quarter block
restores the table's row order through `row_no`. Wrapping the compound
select in a derived table keeps that ordering key out of the
three-column result. Sorting by `row_no` alone would interleave the
quarters, and sorting by `product_name` would break tables whose rows
are not alphabetical — only the pair of keys reproduces the unrolled
layout.

**Complexity:** `O(n log n)` time, `O(n)` space — the compound select
fans `n` wide rows into `4n` long rows and sorts them, and the unrolled
result itself holds all `4n` rows.
