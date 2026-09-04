# Solutions — Most Deletions a Subsequence Survives

## Binary search on k with a subsequence check

Feasibility is monotone: when `p` is still embedded after the first `k`
deletions, it is embedded after any shorter prefix of them, since undoing
deletions only restores characters. The workable `k` therefore form an
interval beginning at 0, and the answer is the interval's right end —
reached by bisecting over `[0, len(removable)]` with the upper-mid form
`(lo + hi + 1) // 2`, which steers the search toward the largest feasible
value instead of stalling one short of it.

The feasibility test is the textbook greedy subsequence scan. The first
`k` positions go into a set, then one pointer walks `s`: positions in the
set are stepped over, and any other position whose character matches the
current character of `p` advances the `p` pointer. Settling for the
earliest match at every step is optimal for subsequence containment, so
`p` survives exactly when its pointer runs off the end.

One test costs a single sweep of `s` plus assembling the deleted set, and
only a logarithmic number of tests runs — writing `r` for
`len(removable)`, that is `O(log r)` tests at `O(n + r)` apiece. The base
`k = 0` is always feasible because `p` is promised to start inside `s`,
so the search can never fail outright.

**Complexity:** `O((n + r) log r)` time, `O(r)` space.
