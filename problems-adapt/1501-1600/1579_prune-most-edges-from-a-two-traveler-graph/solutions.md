# Solutions — Prune the Most Edges From a Two-Traveler Graph

## Kind-3-First Union-Find

Removing the most edges while keeping both Alice's and Bob's subgraphs
connected is the same problem as building the smallest network that still
connects everyone for each of them, then discarding everything left over. A
kind-3 link is strictly more valuable than a kind-1 or kind-2 link, since it
can do the work of both at once — so the greedy order is to offer every
kind-3 link first, keeping only the ones that actually merge two components, and
only then fall back to traveler-specific links to finish off whatever each
person still can't reach.

The code runs two disjoint-set-union structures, one for Alice and one for
Bob, both starting from `n` singleton components. It walks `edges` once for
kind-3 links, unioning `u` and `v` in _both_ structures and counting the
edge as used whenever it merges a component in either one. It then walks
`edges` a second time for kind-1 links (union only in Alice's structure) and
kind-2 links (union only in Bob's), again counting each edge that performs a
real merge. Path compression and union-by-merge keep every `find`/`union`
call close to constant time.

Once every edge has been offered to the right structure(s), the graph is
fully traversable by both exactly when both structures have collapsed to a
single component (`components == 1`); otherwise the answer is `-1`,
regardless of how many edges were "used". When both are fully connected,
every edge that was never needed for a merge is redundant, so the maximum
removable count is `edges.length` minus the number of edges actually used.

**Complexity:** `O((n + m) * α(n))` time, `O(n)` space, where `m` is
`edges.length` and `α` is the inverse Ackermann function.
