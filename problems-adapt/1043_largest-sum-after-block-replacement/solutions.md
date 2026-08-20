# Solutions — Largest Sum After Block Replacement

## Prefix DP with a running block maximum

Write `dp[i]` for the best total reachable on the first `i` entries. Whatever
partition achieves it, its last block is some stretch `arr[i-j .. i-1]` of
length `j` within `1 <= j <= min(k, i)`; that block scores its largest entry
times `j`, and the stretch before it must itself be optimal:
`dp[i] = max(dp[i-j] + max(arr[i-j..i-1]) * j)`. Blocks are consecutive, so
classifying by the last block visits every legal partition exactly once.

Scoring each candidate naively means rescanning its stretch for the maximum;
instead the inner loop grows the block left one entry at a time, letting `j`
climb from 1 and folding each arrival into `running_max`. A single running
maximum then prices every length, dropping the cost of a prefix from `O(k^2)`
to `O(k)`. `dp[0] = 0` seeds the table and `dp[n]` answers.

`k = 1` collapses to the identity partition — one entry per block, nothing
overwritten, the plain sum back — and nothing obliges a block to stretch to
full length, since the max over `j` happily takes a short block when a big
value times a short count wins. On `[2, 12, 6, 10, 3, 8]` with `k = 3`, two
maximal blocks of three (12s then 10s) reach 66.

**Complexity:** `O(n * k)` time, `O(n)` space.
