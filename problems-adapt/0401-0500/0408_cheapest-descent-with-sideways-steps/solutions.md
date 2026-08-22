# Solutions — Cheapest Descent with Sideways Steps

## DP with Two Smallest Row Values

The direct DP records, per row, the cheapest descent ending in each column:
`cur[j]` is `grid[i][j]` plus the smallest entry of the previous row's DP
taken from any column but `j` (the column-change rule bans the straight
drop). Evaluating that excluded minimum by rescanning the previous row for
every cell lands at O(n³) overall.

The escape is that a cell cares about exactly two numbers from the row
above: the row's minimum (`min1`, sitting at index `idx1`) and its runner-up
(`min2`). Unless the cell's own column is `idx1`, the banned entry is not the
one it wanted anyway — it takes `min1`; when the column is `idx1`, the
runner-up `min2` steps in. So after one linear scan collects the two values,
every cell costs O(1): `grid[i][j] + (min2 if j == idx1 else min1)`.

The scan deals with ties the right way: a repeat of the minimum is not
strictly smaller than `min1`, so it drops into the runner-up branch and both
slots end up filled. Row 0 seeds the DP with its own values, the answer is
the minimum across the last row, and a 1 x 1 grid is simply its one entry.

**Complexity:** `O(n²)` time, `O(n)` space.
