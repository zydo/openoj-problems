# Solutions — Cycle-Closing Edge

Both approaches sweep the pairs left to right and stop at the first one whose
two endpoints are already tied together by earlier pairs. They differ only in
how that question is answered: a disjoint-set forest keeps the components
explicit, while the plain search rediscovers reachability each time.

## union_find

Since the input is one link past a spanning tree, a single cycle exists, and
every prefix of `edges` up to the offending pair is still a forest. That gives a
clean stopping rule: the answer is the first pair whose two nodes already lie in
one component, because merging them would build a second route between nodes
that already had one. Every genuine tree link, by contrast, fuses two components
that were separate a moment earlier, so it always passes the test — the surplus
link is the only pair that can ever fail it, and the tie-break "latest on the
cycle" is satisfied for free, since the cycle is not closed until that pair
arrives.

`find` climbs parent pointers to a component's representative, then makes a
second pass over the same chain to hang every node it visited directly beneath
that representative. This path compression keeps the trees shallow, so later
lookups are short. `union` enters a node into the structure the first time it is
seen, compares the two representatives, and reports failure when they coincide —
which is precisely the signal to hand back the current pair. On the guaranteed
inputs the sweep always terminates early; the trailing empty list exists only so
the function is total.

**Complexity:** `O(n log n)` time, `O(n)` space.

## dfs

The same stopping rule without any bookkeeping structure. Keep an adjacency map
of the pairs accepted so far and, for each new pair `(a, b)`, ask whether `b` can
already be reached from `a` over that partial graph. A yes means the two nodes
were connected before this pair existed, so this pair is the one that closes the
cycle. A no means the pair is part of the underlying tree, and it is stored in
both directions before the sweep continues.

Reachability is tested with an explicit stack. A node is marked the moment it is
pushed rather than when it is popped, so it can never be queued twice, and the
probe stops as soon as the target surfaces or the component is exhausted. Since
every prefix of the input is a forest, "reachable through the prefix" and
"already in one component" are the same predicate, so this variant returns the
identical pair as the disjoint-set version.

**Complexity:** `O(E·(V+E))` time — a reachability probe may run for each of the
E pairs over the prefix graph — and `O(V+E)` space for the adjacency map, the
stack and the marked set.
