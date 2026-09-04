# Solutions — Cheapest Order to Cut a Rod

## Interval dynamic programming

Merge the two rod ends `0` and `n` into the cut positions and sort, producing
`m + 2` boundaries in order (with `m = len(cuts)`). Whichever order you saw
in, the first cut inside any stretch of rod turns it into two stretches that
never meet again, and that first pass is charged the whole stretch it crosses.

So let `dp[i][j]` be the cheapest cost of doing every cut strictly between
boundaries `i` and `j`. Try each interior boundary `k` as the first pass:
`dp[i][j] = min(dp[i][k] + dp[k][j]) + (positions[j] - positions[i])`.
A stretch holding no cut (`j = i + 1`) costs nothing, and the whole rod,
`dp[0][m + 1]`, is the answer.

![The example rod with boundaries 0, 1, 2, 3, 4, 7 and the recursion its cheapest order induces: the first cut at 4 splits the rod into [0,4] and [4,7], and each bar below pays its own length — 7, then 4 and 2 and 2 — for a total of 15.](figures/solution-interval-tree.svg)

Fill the table in order of increasing stretch length, so that both halves of a
stretch are already settled when the stretch itself is priced. Sorting up front
is what frees the order; the sentinel ends keep the outermost stretches on the
same footing as the rest. Cut positions are distinct, and with a single cut the
recursion degenerates to `n` plus two empty sides.

For `n = 7` and `cuts = [1,2,3,4]`, sawing in the listed order pays
`7 + 6 + 5 + 4 = 22`, while the cheapest order `4, 2, 1, 3` pays only
`7 + 4 + 2 + 2 = 15`.

**Complexity:** `O(m³)` time and `O(m²)` space, where `m` is the number of cuts.
