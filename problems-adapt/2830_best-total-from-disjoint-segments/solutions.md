# Solutions — Best Total from Disjoint Segments

## Dynamic Programming over Positions

Chosen runs may not overlap, so the row of positions is a line and the task
is weighted interval scheduling underneath. Let `dp[e + 1]` be the best value
collectable from positions `0` through `e`; then `dp[e + 1]` is either
`dp[e]` — position `e` stays unclaimed — or, for every segment `[start, e, value]`
that ends exactly at `e`, the quantity `dp[start] + value`: claim that run on
top of the optimum from strictly before it begins. The largest of those
candidates drives the recurrence, and `dp[n]` is the answer.

One sweep evaluates it if the segments are bucketed by their ending position:
`by_end[e]` collects the `(start, value)` pairs finishing at `e`. The DP then
walks `e` across the row in order, so every `dp[start]` a segment needs is
already settled by the time its end arrives. Sorting the segments is
unnecessary — the bucket array itself supplies the order by end position.

Rows where nothing ends simply carry the previous value forward, which is
also how the recurrence skips a segment whenever leaving a position unclaimed
pays better. Overlap conflicts resolve by construction: a run can only be
added to the optimum that precedes its own start, so it never stacks on a
run it intersects, and unclaimed positions cost nothing.

**Complexity:** `O(n + m)` time, `O(n + m)` space, where `m` is the number of
segments.
