# Solutions — Infection Eradication II

## Union-find over the non-initial components

Taking a machine permanently offline deletes it together with all of its
links, so unlike the variant where the removed machine lingers in the fleet,
no spread can pass through the removed machine afterwards. Look at the
components of the subgraph induced by the non-initial machines: every edge
leaving such a component lands on an initial machine — a non-initial
neighbor would have been merged in — so a component is reached by the
compromise exactly when at least one initial machine stands directly
adjacent to it. Consequently removing an initial machine `u` spares
precisely those components whose sole adjacent initial machine is `u`; a
component touched by two or more initial machines stays compromised through
the others no matter which one goes.

An iterative union-find with path halving and union-by-size builds the
components, merging only pairs `i`, `j` with `graph[i][j] == 1` where both
endpoints are outside `initial`. A second pass walks each initial machine's
matrix row and records, per component root, how many distinct initial
machines adjoin it and which one that is when there is exactly one; each
solely-touched root then contributes its size to that machine's spared
total. Minimizing `M(initial)` means maximizing the spared total, and the
scan over `initial` takes the largest, breaking ties toward the smallest
machine index — which also settles the case where nothing can be spared by
returning the smallest machine of `initial`.

Both passes read the adjacency matrix once, `n(n - 1) / 2` cell pairs plus
one row per initial node, and every array holds `n` entries.

**Complexity:** `O(n²)` time, `O(n)` space.
