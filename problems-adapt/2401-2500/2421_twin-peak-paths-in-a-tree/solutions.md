# Solutions — Twin-Peak Paths in a Tree

## Union-find in value order

Each lone node is a twin-peak path, which contributes `n` before anything
else. A longer twin-peak path has endpoints of some equal value `v` and
interior nodes no taller than `v`, which suggests growing the tree in value
order: activate nodes from the smallest value upward, and when the nodes of
value `v` activate, union across each incident edge whose far end is already
active. At that instant the value-`v` nodes are linked exactly through routes
whose every intermediate node is `<= v` — precisely the candidate twin-peak
paths whose peak value is `v`.

Once a value layer is active, tally its nodes per union-find component (group
them by `find` root). A component containing `c` of the value-`v` nodes
contributes `c * (c - 1) / 2` paths — one per unordered pair — because the
unique tree route between any pair runs only through activated nodes, all
`<= v`. Sum over components and layers, add the `n` singletons, done.

Bucketing node indices by value and walking the distinct values in sorted
order is what guarantees that smaller values merge before larger ones, which
is exactly the invariant keeping every intermediate node `<= v`. Union by
size with path halving makes each find effectively constant, and every edge
is inspected at most twice — once per endpoint, when the later endpoint's
layer activates — so the union-find work is near-linear; sorting the distinct
values dominates.

Worked through `vals = [2,6,4,6,2]`, `edges = [[0,1],[0,2],[2,3],[2,4]]`: the
value-2 layer holds nodes 0 and 4, but they activate before node 2, so no
route joins them; the value-4 layer holds only node 2; the value-6 layer
holds nodes 1 and 3, which land in one component through 0 and 2, giving
`1` pair. Total `5 + 1 = 6`.

**Complexity:** `O(n log n + n α(n))` time, `O(n)` space.
