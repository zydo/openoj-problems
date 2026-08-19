# Solutions — Count Contained Grid Islands

## Flood Fill with a containment check

One observation removes any need to pair islands across the two grids: an
island of `grid2` is contained exactly when each of its land cells is also
land in `grid1`. Those cells are 4-connected in `grid2`, hence also in
`grid1`, so they all lie inside one `grid1` island — which by definition
spans the whole `grid2` island. Conversely, if even one cell of the
`grid2` island is water in `grid1`, no `grid1` island can cover it. The
task therefore collapses to flood-filling each island of `grid2` and
running a per-cell membership test against `grid1`.

The method sweeps `grid2` row by row. On any land cell that a `seen`
matrix has not marked, it flood-fills the island there through an explicit
stack instead of recursion — at 500×500, a recursive fill could overrun
the interpreter's stack. Each popped cell is tested against
`grid1[x][y]`; one miss clears the `is_contained` flag for the entire
island. Neighbors enter the stack only when they are in bounds, land in
`grid2`, and unmarked, and they are marked at push time so nothing is
ever enqueued twice.

![The example grids side by side: grid2's five-cell island in the upper left, the four-cell island at the lower left, and the single cell at (4, 3) lie entirely on grid1 land and count as contained, while the lone cell at (2, 4) is water in grid1, marked with an X.](figures/solution-sub-island-check.svg)

When the fill ends with `is_contained` still set, the island is counted.
Borders need no special care: out-of-grid cells are never pushed, so an
island hugging the edge is simply bounded by water there, and the `seen`
marks persist across islands so overlapping sweeps never double count.
Every cell of `grid2` is touched a constant number of times overall.

**Complexity:** `O(m·n)` time, `O(m·n)` space.
