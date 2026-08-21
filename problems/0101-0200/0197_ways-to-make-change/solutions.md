# Solutions — Ways To Make Change

## Unbounded Knapsack Combinations DP

Set `dp[a]` to the number of coin combinations summing to exactly `a`, with
`dp[0] = 1` standing for the empty combination. Denominations enter one at a
time, and each entry pass runs amounts upward from `c`, accumulating
`dp[a] += dp[a - c]`. Because the sweep reads `dp[a - c]` after that cell has
already absorbed contributions using the same coin, a denomination may appear
in a combination arbitrarily often — the complete-knapsack behavior.

What the table counts — combinations rather than orderings — is settled
entirely by the nesting. With one denomination finished before the next
begins, every multiset is assembled with its coins in one fixed order (the
denominations' input order), so it is produced exactly once. Interchanging
the loops, amounts outside and coins inside, lets one multiset be built
through several coin orders, and the same coins get counted again as
distinct arrangements — the classic distinction this task turns on.

Positivity does the rest of the work. No total below the smallest
denomination is reachable and the sweep bounds simply never touch them; a
target nothing can assemble keeps its initial 0, as with `amount = 11` and
`coins = [4,6]`, where every reachable total is even. One array of
`amount + 1` cells is enough because each denomination's pass updates the
table in place, and the statement's bound keeps the growing counts inside a
32-bit integer. Work is one full sweep per denomination across the amount
axis.

**Complexity:** `O(n·a)` time, `O(a)` space.
