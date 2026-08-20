# Solutions — Tree-Shaped Graph

## Edge-Count Check with Union-Find

Two facts pin a tree down — `n` nodes, `n - 1` edges, all one piece — and they
are not independent. A simple graph with `n - 1` edges and no loop is forced to
be connected, so the check reduces to: right count, then no loop anywhere. The
count half is decided before any traversal runs; on Example 3 it answers at
once, since four nodes carrying two edges can never be one piece.

Whether a loop appears is best tested while the graph is being assembled.
Every node begins alone. Walking the edges, find the component of each
endpoint: if the two roots are the same, this edge runs between nodes already
linked by some other route — it is the closing edge of a loop, as with
`[0,2]` on top of `0 - 1 - 2` in Example 2 — and the answer is `false` on the
spot. Distinct roots mean the edge genuinely merges two components, so one root
is re-pointed at the other. If all `n - 1` edges merge, `n` components have
become one, with no loop closed along the way.

The `find` walk uses path halving — `parent[x] = parent[parent[x]]` while
climbing — so each traversal leaves shorter paths behind it and later ones cost
less. With `n <= 2000` and at most 5000 edges the amortized per-edge cost is
effectively constant. The parent array is all the extra storage.

**Complexity:** `O(n + e·log n)` time, `O(n)` space.
