# Solutions — Arrays With K Record Maxima

## DP over (length, record count, running maximum) with prefix sums

Only three facts about a prefix decide how it can be extended: how long it is,
how many records it has already logged, and what its current maximum is. That
is the state. Let `dp[c][j]` be the number of arrays of the length considered
so far whose record count is `c` and whose maximum is exactly `j`.

Growing an array by one value `v` does one of two things. If `v <= j` the
maximum stands and no record is logged — the array continues invisibly, and
there are `j` such values. If `v > j` the value `v` is by construction a
record, cost `c + 1`, maximum `v`. So each target cell

```text
dp[c][j] = dp[c][j] * j  +  sum(dp[c-1][1..j-1])
```

receives a stay-put term (extend an array already at maximum `j` by any of the
`j` values it absorbs) plus a promotion term (extend a cheaper array whose
maximum is anything below `j` by exactly `j`). The promotion term is a prefix
of the previous row, so one running prefix-sum pass per `(length, cost)` cell
serves all maxima without an inner `O(m)` loop.

Length 1 seeds the table: each lone value `j` in `1..m` has record count 1,
`dp[1][j] = 1`. The remaining `n - 1` growth steps each rebuild the table, and
the answer reads off as `sum(dp[k][j])` over every maximum. Three requests
answer 0 before any DP runs: `k = 0` (a first element is always a record),
`k > n` (each position can log at most one record), and `k > m` (records are
strictly increasing, so they are distinct values). For `n = 2, m = 5, k = 1`
the stay-put term alone gives `5 + 4 + 3 + 2 + 1 = 15`, matching the count of
arrays whose second element never passes the first.

All additions are taken modulo `10^9 + 7` as they happen.

**Complexity:** `O(n * k * m)` time, `O(k * m)` space.
