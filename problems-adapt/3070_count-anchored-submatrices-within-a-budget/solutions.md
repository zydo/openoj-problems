# Solutions — Count Anchored Submatrices Within a Budget

## Running column sums with a row break

An anchored rectangle is fully determined by its bottom-right corner `(i, j)`,
and its sum is exactly the total of the block `grid[0..i][0..j]`. Hold
`col_sums[j]`, the accumulated total of column `j` down through row `i`; then
one left-to-right running total of `col_sums` inside row `i` hands over each
corner's rectangle sum in constant time — no two-dimensional prefix table ever
gets built.

Because entries are non-negative, those rectangle sums never decrease as `j`
advances through a row, so the first corner whose running total passes `k`
ends the row: everything further right is larger still. Deeper rows only add
more to the columns, so they break no later than shallower ones, and the sweep
naturally concentrates on the affordable upper-left region whenever the budget
is tight.

Each surviving corner adds one to the count. The corner at `(0, 0)` is just
the single-cell rectangle, so the boundary where `k` sits below `grid[0][0]`
falls out as a count of zero with no special casing. On the third example
(`[[6,1],[1,1]]`, `k = 8`) the sweep counts 6 and 7 along the first row, then
7 along the second before the running total hits 9 and breaks — for a total
of 3.

**Complexity:** `O(m * n)` time, `O(n)` space.
