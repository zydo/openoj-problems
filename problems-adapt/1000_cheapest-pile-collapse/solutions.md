# Solutions — Cheapest Pile Collapse

## Interval DP with a pile-count dimension

Start with a feasibility test. One move trades `k` piles for a single pile, so
the row shrinks by `k - 1` counters-of-piles each time; a row of `n` piles can
reach size one only when `n - 1` is a multiple of `k - 1`. Anything else
answers `-1` immediately. A merged pile is always the union of adjacent original
piles, so every intermediate pile occupies one contiguous stretch of the row —
exactly the situation interval DP describes.

Let `dp[i][j][m]` be the least cost of shrinking the stretch `piles[i..j]` to
exactly `m` piles. For `m >= 2`, cut after `mid`: squeeze the left stretch into
a single pile, the right stretch into `m - 1` piles, and take the best `mid` —
`dp[i][j][m] = min(dp[i][mid][1] + dp[mid+1][j][m-1])`. The lopsided split still
visits every reachable layout: in any arrangement of `m` piles inside the
stretch, the first pile covers some prefix, and the cut is placed where that
prefix ends. A stretch holding exactly `k` piles is allowed one collapse, paying
its total counters, so `dp[i][j][1] = dp[i][j][k] + prefix[j+1] - prefix[i]`
with prefix sums answering the range sum in constant time.

Lengths grow from the outside in — every sub-stretch is finished before it is
consulted — and `dp[i][i][1] = 0` seeds the table. States no sequence of moves
reaches stay at infinity behind `< INF` guards, and the answer reads off as
`dp[0][n-1][1]` (with a defensive `-1` if it is infinity).

On the row `[6, 2, 4, 3]` with `k = 2`, the table prices collapsing `[6, 2]`
at 8 and `[4, 3]` at 7 before the full stretch buys its two-pile layout for
`8 + 7 = 15`; the root then collapses at `15`, matching the `30` total.

**Complexity:** `O(n^3 * k)` time, `O(n^2 * k)` space.
