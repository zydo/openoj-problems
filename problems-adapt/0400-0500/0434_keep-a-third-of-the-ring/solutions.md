# Solutions — Keep a Third of the Ring

## Reduce to a no-adjacent choice on a broken circle

Two directions make the game static. Whenever you take a value, its two
neighbours leave with it, so no two of your `n` picks are ever adjacent on the
circle; and conversely, from any set of `n` pairwise non-adjacent positions
you can order the picks so the ritual delivers exactly that set. The task is
therefore: from a circular array of `3n` values, choose exactly `n`
non-adjacent entries of maximum sum.

The circle is broken with the standard observation — a non-adjacent selection
can never include both the first and the last entries, since those are
neighbours around the wrap. So the optimum is the better of two linear runs:
`rob(ring[:-1])`, which forbids the last entry, and `rob(ring[1:])`, which
forbids the first. In Example 2, the run that drops the final 6 is the one
that crowns 10 and 8.

Each run is the classic no-adjacent-choice DP with a pick quota. The table
`dp[i][j]` holds the best sum obtainable from the first `i` entries while
choosing exactly `j` of them; entry `i` is either passed over (`dp[i-1][j]`)
or taken, which bans entry `i - 1` and adds `arr[i-1]` to `dp[i-2][j-1]`.
Unreachable states sit at `-1` so they can never win a maximization — the
quota is what makes the reduction honest, because a plan with fewer than `n`
picks does not correspond to a full play of the game. A run's answer is its
`dp[len][k]` cell, and the code guards the degenerate single-value ring,
where both runs would otherwise be empty.

Each of the two runs fills a table of `O(len * n)` cells.

**Complexity:** `O(n^2)` time, `O(n^2)` space.
