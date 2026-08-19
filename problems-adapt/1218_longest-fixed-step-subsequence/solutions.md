# Solutions — Longest Fixed-Step Subsequence

## Hash-map DP on the ending value

A locked-in step does the pruning that a general longest-subsequence DP
needs pairwise comparisons for. Every move must land on exactly
`v + step`, so the only thing worth remembering about the processed prefix
is, per value, the length of the best chain that ends there — the DP table
shrinks from one cell per position to one entry per value.

The array is swept once. Each element `x` extends the best chain ending at
`x - step` by one, or starts a fresh chain of length 1 when that value has
not appeared (`get` with default 0 folds both cases into one expression).
Overwriting the entry for `x` never loses information: a later chain through
the same value can only match or exceed an earlier one, since its
predecessor's entry had every chance to grow in the meantime.

Ordering correctness rides on the read-before-write: consulting
`dp[x - step]` before storing `dp[x]` uses only elements strictly left of
the current position, so chains always run forward through the array. This
also absorbs negative steps and repeated values untouched — `x - step` is
simply a different key, as in Example 3, where `8, 6, 4, 2, 0` thread
through `[8, 1, 6, 4, 2, 5, 0]` at step `-2` while `1` and `5` lead nowhere.
A running maximum, at least 1 on any non-empty input, is the answer.

**Complexity:** `O(n)` time, `O(n)` space.
