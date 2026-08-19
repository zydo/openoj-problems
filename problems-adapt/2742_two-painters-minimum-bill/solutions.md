# Solutions — Two Painters, Minimum Bill

## Knapsack-Style Coverage DP

Fold the two painters into one covering question. While the paid painter
spends `time[i]` units on wall `i`, the free painter can complete up to
`time[i]` other walls at no charge, so hiring wall `i` effectively handles
`time[i] + 1` walls — itself plus `time[i]` free ones — for `cost[i]`. A
paid selection `P` therefore finishes the job exactly when
`Σ (time[i] + 1) over P` reaches `n`, and the bill is `Σ cost[i]`.

That is a 0/1 knapsack on coverage: `dp[j]` holds the cheapest selection
covering at least `j` walls of demand, seeded `dp[0] = 0`. Wall `i` updates
`dp[j] = min(dp[j], dp[max(j - (time[i] + 1), 0)] + cost[i])` with `j`
falling; the clamp folds any surplus back to the `dp[0]` origin, which is
sound because coverage past `n` buys nothing. The bill for the whole job is
`dp[n]`.

Running `j` downward keeps each wall hired at most once, exactly as in
bounded knapsack. In Example 3 every `time[i]` is 1, so each paid wall
covers two and three hires are unavoidable — the cheapest three, 1 + 2 + 3,
give 6. With `n <= 500`, the double loop is a quarter-million steps and one
rolling row carries all the state.

**Complexity:** `O(n^2)` time, `O(n)` space.
