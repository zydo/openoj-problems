# Solutions — Count Grid Routes With a Given Xor

## Grid DP with the running xor as state

A route grows one cell at a time, and whether a half-built route can be
finished depends on exactly two things about it: which cell its head occupies,
and the xor of what it has collected so far. So make both part of the state —
`dp[i][j][x]` is the number of routes from `(0, 0)` to `(i, j)` whose running
xor is `x`, kept modulo `10⁹ + 7`.

Entering cell `(i, j)` folds that cell's number into the xor. A route sitting
on `(i, j)` with running xor `x` must have stood on `(i - 1, j)` or on
`(i, j - 1)` with running xor `x ^ grid[i][j]` — xor is its own inverse, so
stripping the cell's value recovers the previous state — giving
`dp[i][j][x] = dp[i-1][j][x ^ v] + dp[i][j-1][x ^ v]`. The corner seeds
`dp[0][0][grid[0][0]] = 1`, the table fills in row-major order, and the
answer is waiting at `dp[m-1][n-1][k]`.

Every number in the grid is under 16, so the xor stays inside `[0, 16)` and
the state space is `m · n · 16` — at most `300 · 300 · 16 ≈ 1.4` million
entries, each filled in constant time.

On `[[2,6,6],[5,5,1],[3,7,1]]` with `k = 2`: the first row holds one route
per cell with running xors `2`, `4`, `2` — the two sixes cancel, so the route
reaching the top-right cell is back where it started — and the far corner ends
up holding `{1: 1, 2: 3, 4: 1, 7: 1}`. The three routes at `x = 2` run down
the left edge then across (`2 ^ 5 ^ 3 ^ 7 ^ 1`), through the middle staircase
(`2 ^ 5 ^ 5 ^ 1 ^ 1`), and along the top then down (`2 ^ 6 ^ 6 ^ 1 ^ 1`).

Edge behaviour: a 1×1 grid answers `1` exactly when `grid[0][0] == k`; a cell
holding `0` leaves the running xor where it was, which the recurrence absorbs
without a special case; and a target no route can reach simply stays `0`.

**Complexity:** `O(m · n · 16)` time, `O(m · n · 16)` space.
