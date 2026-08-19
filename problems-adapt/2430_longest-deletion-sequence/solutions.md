# Solutions — Longest Deletion Sequence

## Suffix DP with an LCP table

Let `dp[i]` be the largest number of steps that delete the suffix `s[i:]`,
with `dp[n] = 0` for the empty suffix. Deleting the whole suffix in one step
is always legal, so `dp[i]` is at least 1. Otherwise the first step removes a
leading block of some length `L` with `(n - i) / 2 >= L` such that
`s[i : i + L] == s[i + L : i + 2L]`, leaving `s[i + L :]`, which gives the
transition `dp[i] = max(1 + dp[i + L])` over every legal block length.

Testing all candidate blocks naively would be cubic, so block equality is
decided through a longest-common-prefix table: `lcp(j, k) = lcp(j + 1, k + 1)
+ 1` when `s[j] == s[k]`, else 0. Then `s[i : i + L] == s[i + L : i + 2L]`
holds exactly when `lcp(i, i + L) >= L`. The recurrence only ever looks one
row down, so the table is filled row by row for decreasing `i`, keeping two
rows (`cur` and `next_row`) — `O(n)` memory for an `O(n^2)`-sized table.

Each row is finished just before its `dp[i]` is computed, so the block-length
loop reads `cur[i + L]` from the freshly built row while the `dp[i + L]`
values to its right are already final. Degenerate inputs fall out naturally:
a run of one repeated character takes the length-1 split again and again, and
a suffix whose only legal step is whole-string deletion still gets the floor
of 1.

**Complexity:** `O(n^2)` time, `O(n)` space.
