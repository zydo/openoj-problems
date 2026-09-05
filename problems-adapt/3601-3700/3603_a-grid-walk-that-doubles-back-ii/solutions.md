# Solutions — A Grid Walk That Doubles Back II

## Arrival-cost dynamic programming over a rolling row

Because every step goes right or down, any route from (0, 0) to
(m − 1, n − 1) makes exactly (m − 1) + (n − 1) steps, and the step/pause
alternation is therefore the same on every route: one pause between each
pair of consecutive steps, none before the first step and none after the
last. That decouples the clock from the search — a
path's total is its entry costs plus the wait cost of every cell it
_departs_, which is every visited cell except the destination. So the
state is just the cell: let `dp[i][j]` be the cheapest cost of standing on
(i, j) with its entry paid and all earlier waits settled.

The transition charges the edge, not the arrival: entering (i, j) from
above or the left costs that predecessor's `waitCost` plus `(i + 1) * (j +
1)`, so `dp[i][j] = min(dp[i-1][j] + wait[i-1][j], dp[i][j-1] +
wait[i][j-1]) + entry(i, j)`. The start is the base case `dp[0][0] = 1`,
and its wait is simply never charged — the first step departs immediately.
(A tempting alternative accounting adds the arriving cell's wait and
subtracts the destination's at the end, but that books each pause to the
wrong cell and disagrees with the worked examples — on the input
`m = 2, n = 2, waitCost = [[3,5],[2,4]]` it totals 12 instead of 9 — so
the examples' accounting is the one implemented.) Since row `i` only reads row
`i − 1`, two 1-D arrays of length `n` carry the whole table, and the
answer is `dp[n-1]` at the last row.

Totals can reach roughly 2 × 10¹⁰ — the sweep of a 10⁵-cell grid with
near-maximal waits — so the accumulators are 64-bit (`long`, `long long`,
`i64`); in the JS family plain numbers are exact because the bound sits
far below 2⁵³.

**Complexity:** `O(m * n)` time, `O(n)` space.
