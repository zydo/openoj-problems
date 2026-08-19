# Solutions — Permutations with Prescribed Prefix Inversions

## Prefix-sum dynamic programming on inversion counts

Grow the permutation from the left and keep one number per state: `dp[j]`,
how many prefixes of the current length carry exactly `j` inversions. A
prefix of length `i` extends by one entry that overtakes anywhere between
`0` and `i` of the values already placed, so the new row at count `j` is the
sum of the old row over the window `j - i .. j`. Maintained as running
prefix sums, that window collapses to a single subtraction, and the whole
length step costs one pass over the tracked counts.

Prefix inversion counts only ever rise as the array grows, which licenses two
prunings. First, no state sitting above the biggest demanded `cnt_i` can
later satisfy anything, so the dp axis stops at that value. Second, whenever
length `end_i + 1` is reached, every state whose count is not the demanded
one is set to zero — mismatching prefixes stop contributing immediately, and
only survivors propagate into longer prefixes.

Because the constraints promise a requirement pinned to the final index
`n - 1`, the answer is a direct lookup: `dp[req[n - 1]]`. The first length
skips the transition (a lone entry cannot invert anything), and all sums are
kept modulo `10⁹ + 7` throughout, so the astronomically many permutations
are counted exactly where it matters. Example 1's single demand for five
inversions in four entries, for instance, resolves to the three permutations
`[2,3,1,0]`, `[3,1,2,0]` and `[3,2,0,1]`.

**Complexity:** `O(n · C)` time with `C` the largest demanded count (at most
400), `O(C)` space.
