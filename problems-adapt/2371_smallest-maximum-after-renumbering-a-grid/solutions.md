# Solutions — Smallest Maximum After Renumbering a Grid

## Cell Visits in Value Order, Row/Column Maxima Plus One

Order pressure travels along rows and columns and nowhere else: two cells
that share neither a row nor a column never constrain each other. So the
number a cell needs is decided entirely by the cells of its own row and
column, and the natural schedule is to settle cells from the smallest
original value upward. When a cell's turn comes in that order, every cell in
its row or column holding a smaller original value has already been written,
and every cell holding a larger one is still blank.

At each visit the smallest legal writing is
`1 + max(best so far in the row, best so far in the column)`: the new number
must beat both running maxima, and any stricter demand could only come from
cells not yet written, which by the visiting order are destined for strictly
larger numbers anyway. Keeping one running maximum per row and one per
column is therefore enough — after the write, both update to the value just
placed. On `grid = [[9,2],[6,4],[1,8]]`: the 1 and the 2 both take 1, the 4
takes 2, the 6 takes 3, the 8 takes 3, and the 9 finishes at 4.

This schedule is simultaneously optimal and canonical. Optimal because each
written value is the least feasible given the commitments already made — no
cell could receive less without breaking an order relation or pushing some
later cell higher — and canonical because the distinct values fix the
visiting order outright, so two correct programs produce byte-identical
matrices, which is what the exact judge compares. A one-cell matrix writes
1, and a single row or column collapses to writing 1, 2, 3, ... in value
order.

**Complexity:** `O(mn log(mn))` time for the sort; `O(mn)` space for the
output plus `O(m + n)` for the running maxima.
