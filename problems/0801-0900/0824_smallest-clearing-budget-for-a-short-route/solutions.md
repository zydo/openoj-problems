# Solutions — Smallest Clearing Budget for a Short Route

## Binary Search Over the Weight Range

The whole approach rests on one monotone fact: a budget `money` makes
passable exactly the edges with `w <= money`, so growing the budget only ever
adds edges. Whether `n - 1` is reachable from `0` within `k` edges therefore
goes false-to-true and never back — precisely the shape of predicate that
binary search settles, here over `[0, max_w]` with `max_w` the largest weight
in the input.

The predicate `can(money)` sweeps from node `0` across passable edges only.
Because the sweep proceeds level by level, the recorded `dist[v]` is the
fewest edges over all available walks to `v`; nodes already sitting at `k`
edges are left unexpanded, since anything beyond them would exceed the limit,
and the predicate holds exactly when `dist[n - 1]` is set and at most `k`.

Before searching, `can(max_w)` is tried once: if opening every edge still
fails — the target unreachable outright, or every walk longer than `k` — the
answer is `-1`. Otherwise `can(hi)` holds throughout the search and the loop
closes in on the least feasible amount, which is necessarily an actual weight
because feasibility changes only when an edge enters the available set. With
weights up to a billion, about thirty sweeps suffice; on Example 2 they
converge on 20, the dearest edge of the unique two-edge walk `0 - 1 - 5`.

**Complexity:** `O((n + m) log W)` time, `O(n + m)` space.
