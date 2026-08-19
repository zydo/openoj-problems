# Solutions — Count Partitions With Prime Starts

## Layered Partition DP with Prime-Start Prefix Sums

Only the seams carry information: a piece beginning at index `x` is admissible
exactly when `s[x]` is one of `2, 3, 5, 7`, and one ending at index `i - 1`
when `s[i-1]` is not. Let `dp[i][j]` count the ways to cut the prefix
`s[0:i]` into `j` admissible pieces. The final piece is some `s[x:i]`, legal
when `x <= i - minLength`, `s[x]` is prime, and `s[i-1]` is not — so
`dp[i][j]` is the sum of `dp[x][j-1]` over those starts, and a prefix ending
on a prime digit kills the cell outright (it is simply left at 0).

Re-adding that interval sum for every `i` is the wasteful step, and a
per-layer prefix removes it: while filling layer `j`, accumulate
`prefix[l] = dp[0][j-1] + ... + dp[l-1][j-1]` counting only positions `x`
whose digit is prime. Each cell then costs one lookup,
`dp[i][j] = prefix[i - minLength + 1]`, reduced modulo `10⁹ + 7`.

Layer `j = 0` is seeded with `dp[0][0] = 1` — one way to have cut nothing —
and zeros elsewhere, so pieces accrue one per layer and the prime-start
filter automatically demands that the very first piece open on a prime digit
(`x = 0` contributes only when `s[0]` does). After `k` layers, `dp[n][k]` is
the answer. Unsplittable inputs — a prime final digit, or lengths that
`minLength` starves — leave the cell at 0 with no special handling.

`k` layers times `n` end positions, with linear prefix construction per
layer, is `O(n·k)` on `n <= 1000`; the table itself is `O(n·k)`.

**Complexity:** `O(n·k)` time, `O(n·k)` space.
