# Solutions — Most End-Pair Removals With One Sum

## Interval DP over the three possible tallies

The opening removal chooses the tally every later removal must repeat, and it
takes elements only from the ends — so the tally must be one of
`nums[0] + nums[1]`, `nums[n-2] + nums[n-1]`, or `nums[0] + nums[n-1]`. Solve
independently for each of the three and keep the best.

For one tally, `dp[l][r]` records the most removals achievable inside the
stretch `nums[l..r]`. Each removal eats two boundary elements, so exactly three
transitions exist: a left pair on tally gives `1 + dp[l+2][r]`, a right pair
gives `1 + dp[l][r-2]`, and the outer pair gives `1 + dp[l+1][r-1]`. The table
is filled by increasing stretch length; exhausted stretches hold 0 and simply
add nothing, with range guards covering the two-element case.

![The score-7 table for [5,2,3,1,6,4] filled by increasing length, with the winning chain dp[0][5] -> dp[2][5] -> dp[3][4] highlighted.](figures/solution-interval-dp.svg)

The walk in the figure is the first example: `dp[0][5]` removes the left pair
`5 + 2`, `dp[2][5]` removes the outer pair `3 + 4`, and `dp[3][4]` removes the
left pair `1 + 6` — three removals, all tallying 7, clearing the array.

With `n <= 2000`, each tally's `O(n^2)` table is cheap — the three passes
together stay around 12 million cell updates — and the table is rebuilt per
tally, so only one is alive at a time.

**Complexity:** `O(n^2)` time, `O(n^2)` space.
