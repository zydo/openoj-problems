# Solutions — Unique Paths

## Rolling-Row Dynamic Programming

The number of paths into a cell obeys the recurrence
`paths(r, c) = paths(r - 1, c) + paths(r, c - 1)`, because a robot arrives
only from above or from the left. Every cell of the top row and the left
column admits exactly one path — a straight run of moves — and that is all
the seeding the table needs. Instead of materializing the full `m x n`
grid, the code keeps a single row: it starts as all ones (the path counts
of the first row) and is rewritten in place once for each remaining row.

The in-place update works because of evaluation order. When column `j` is
being computed, `row[j]` still holds the count from the row above, while
`row[j - 1]` was already overwritten earlier in this pass and therefore
holds the current row's left neighbor. So `row[j] += row[j - 1]` applies
the recurrence exactly, drawing its two operands from the two directions
the robot could have come from. Each left-to-right pass folds one more row
of the classic two-dimensional table into the same `n` slots, and after
`m - 1` passes `row[-1]` is the count for the bottom-right corner.

Degenerate grids fall out of the loop bounds rather than needing special
cases: when `m == 1` the outer loop never runs, and when `n == 1` the inner
range is empty, so in either case the row stays all ones and the returned
`row[-1]` is `1` — a single row or column has exactly one path. With `m, n <= 100` the answer stays under `2 * 10^9`, as
the statement guarantees, and Python integers handle it exactly.

**Complexity:** `O(m * n)` time, `O(n)` space.
