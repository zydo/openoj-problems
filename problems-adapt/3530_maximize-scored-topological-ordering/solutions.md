# Solutions — Maximize Scored Topological Ordering

## Bitmask DP Over Seated Sets

With `n <= 22` the state space fits a bitmask: `dp[mask]` is the best value
reachable when exactly the nodes of `mask` occupy the first `popcount(mask)`
seats. The node taking the next seat can be any leftover node whose
predecessors all sit in `mask` — and that legality check costs one AND once
each node's predecessors are packed into a bitmask `pred[v]`, tested as
`pred[node] & mask == pred[node]`. Seating the node adds `score[node]` times
its position.

The table fills in increasing numeric order of masks, which never disagrees
with increasing seat count, so a transition always reads finished values.
Masks that no valid prefix produces — sets not closed under the edge relation —
hold a sentinel of −1 and are skipped, keeping them from contaminating
successors. The final answer waits at `dp[(1 << n) - 1]`.

Two touches keep it quick. A fast path answers the edge-free input in
`O(n log n)`: with every score positive, the rearrangement inequality says
ascending scores belong on ascending positions, so sorting and multiplying
straight through is optimal. Otherwise the main loop pays one `O(n)` scan per
mask, negligible even at `2^22` states.

Walk the second example (`edges` out of node 1 into 0 and 2, `score =
[6,1,3]`): seat 1 is forced, contributing `1 * 1`; the mask `{1}` then offers
either child — seating 2 adds `3 * 2` and later `6 * 3` for 25, while seating
0 first would lock in `6 * 2` and finish at 22. The DP keeps the larger.

**Complexity:** `O(2^n · n)` time, `O(2^n)` space.
