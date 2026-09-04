# Solutions — Totals For Every Six-Minute Window

## Group by the integer-division window number

Every output column is a function of a single grouping key — the
window number — so one `GROUP BY` produces the whole result. Because
minutes are 1-based, minute `m` falls in window `(m - 1) / 6 + 1`:
integer division by 6 maps minutes 1-6 to window 1, minutes 7-12 to
window 2, and so on, exactly the bucketing the statement describes.
The window count is always `total_rows / 6`, and each window appears
exactly once in the output, so no group needs post-filtering or
padding.

The aggregates themselves are plain `SUM(orders_placed)` — every row
of a window participates, and SQLite sums in 64-bit, so totals far
beyond the 32-bit per-row range stay exact. Grouping directly on the
`window_no` alias (computed in the select list) keeps the formula in
one place, and the final `ORDER BY window_no` emits the groups in the
ascending order the statement requires.

**Complexity:** `O(N log N)` time for the grouped aggregation over `N`
minute rows (SQLite builds a temporary b-tree on the group key),
`O(G)` space for the `G` produced windows.
