# Solutions — Distances in a Growing Digraph

## Adjacency List plus Per-Query Dijkstra

Insertions only ever append — no removal, no re-pricing — so the whole
"mutable digraph" worry collapses into an adjacency list of
`(head, cost)` pairs that `addEdge` extends in constant time. Nothing has
to be invalidated or rebuilt between queries; all the real work happens
inside a query.

Costs are strictly positive, and that is exactly the license Dijkstra
needs: run one search from the origin of the query. A min-heap keyed by
tentative distance serves nodes in settle order; when a popped entry
carries a distance larger than the recorded one, the node was already
settled more cheaply and the entry is dropped. Each relaxation that
improves a neighbor pushes a new entry, so any entry goes stale at most
once and one query costs `O((n + e) log n)`. Two small practicalities:
the search stops the moment the destination is popped (its distance is
final then), and an origin-equals-destination query returns `0` before
any setup runs.

On Example 1, the first query weighs 0 -> 1 -> 2 -> 4 at 14 against
0 -> 3 -> 4 at 12 and settles 12; the reverse query runs the single cycle
4 -> 0 and pays 8. After `addEdge([3, 1, 1])`, the route
0 -> 3 -> 1 -> 2 costs 6 and undercuts the direct 7.

With `n <= 100`, at most `9900` starting arcs plus `100` added ones, and
`100` queries, even the densest worst case — each query sweeping the
entire digraph — is a few million heap touches, comfortably inside the
limits; memoizing all-pairs distances would buy nothing at this scale,
which is precisely what the follow-up is asking about.

The Python and Java canonical solutions follow this scheme (the Java one
accumulates distances in `long` so the infinity sentinel arithmetic stays
clean even though route costs fit an `int`).

**Complexity:** `O(1)` per `addEdge`, `O((n + e) log n)` per
`shortestPath`, `O(n + e)` space.
