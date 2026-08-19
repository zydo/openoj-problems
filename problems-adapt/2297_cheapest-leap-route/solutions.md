# Solutions — Cheapest Leap Route

## Monotonic Stack Jump Graph + DAG DP

Read the two rules as a statement about *runs*. The first says the values
strictly between `i` and its target are all below `nums[i]`, so the target has to
be the very first index to the right that is not below `nums[i]`; the second says
none of them is below `nums[i]`, so that target has to be the first index to the
right that is. Anything further would have to leap over one of those two, and the
index leapt over is exactly what breaks the run the rule requires. Two outgoing
leaps per index at most, always forward: at most `2n` edges, and a DAG.

Each table costs one left-to-right pass with a monotonic stack. For the
first-not-below table, arriving at `i` pops every stacked index whose value is at
most `nums[i]`, since `i` settles each of them; for the first-below table,
arriving at `i` pops every stacked index whose value strictly exceeds `nums[i]`.
Note where equality goes — it is absorbed by the first table and excluded from
the second, matching the `>=` of one rule against the `<` of the other, which is
what makes plateaus such as the pair of 2s in `[6,2,2,7]` behave. Indices still
stacked when the pass ends keep the sentinel `-1`, meaning no such target exists.

With the edges in hand, `dp[i]` — the cheapest way to land on index `i` — is
filled in increasing index order from `dp[0] = 0`. Every edge points strictly
rightwards, so by the time `i` is reached its own value is final, and relaxing
its two targets with `dp[i] + costs[j]` needs no priority queue at all. Sentinel
targets are skipped, and `dp[n - 1]` is the answer; a one-element array answers
`0` immediately. Charging on arrival is why `costs[0]` never enters a total.

**Complexity:** `O(n)` time, `O(n)` space.
