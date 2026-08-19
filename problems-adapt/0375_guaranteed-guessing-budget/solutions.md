# Solutions — Guaranteed Guessing Budget

## Minimax interval DP

Every reply you receive shrinks the surviving candidates to a contiguous stretch,
and the money still needed depends on that stretch alone — not on which probes
produced it. So write `dp[i][j]` for the amount that guarantees pinning down a
value hidden anywhere in `i .. j`. Probing `g` there charges `g` and then leaves
either `i .. g-1` or `g+1 .. j`; since the reply is chosen adversarially, the
charge to plan for is `g + max(dp[i][g-1], dp[g+1][j])`, with an absent side
worth nothing. You get to choose `g`, so `dp[i][j]` is the least of those totals
— a minimum over your move wrapped around a maximum over the opponent's.

The table is filled by stretch length, because a stretch's value cites only
strictly shorter ones. Length-one stretches are already `0`, which is why the
loop starts at length two; for each start `i` the end is `j = i + length - 1`,
and every `g` in the stretch is tried. Allocating `(n+2) x (n+2)` entries lets
the two boundary reads `dp[i][i-1]` and `dp[j+1][j]` land on zeros instead of
needing guards. The answer is `dp[1][n]`. Recursing without a table would revisit
the same stretch exponentially often; the length-ordered fill computes each of
the `O(n²)` stretches once at a cost of up to `n` candidate probes.

The small cases fall out on their own: `n = 1` never enters the loop, leaving
`dp[1][1]` at zero, and `n = 2` yields 1, since naming the smaller value first
risks only one coin. For `n = 9` the fill settles on `dp[1][9] = 14`, opening at
6 rather than at the midpoint — probes are paid for by value, so the balance
point of the two sides sits above the centre of the stretch.

**Complexity:** `O(n³)` time, `O(n²)` space.
