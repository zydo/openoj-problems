# Solutions — Tree-Shaped Graph

Two tests arrive at the same verdict from opposite ends: both open by
counting, since `n` nodes joined as a tree carry exactly `n - 1` edges and
any other count settles the matter with no searching at all. What splits
them is the second half — one assembles the graph edge by edge and listens
for the moment an edge closes a loop; the other never builds a component
structure, walks the finished graph once from a single starting node, and
simply counts what it reaches.

## Edge-Count Check with Union-Find

A simple graph with `n - 1` edges and no loop is forced to be connected, so
once the count clears, the check reduces to hunting for a loop. Whether one
appears is best tested while the graph is being assembled. Every node begins
alone. Walking the edges, find the component of each endpoint: if the two
roots are the same, this edge runs between nodes already linked by some
other route — it is the closing edge of a loop, as with `[0,2]` on top of
`0 - 1 - 2` in Example 2 — and the answer is `false` on the spot. Distinct
roots mean the edge genuinely merges two components, so one root is
re-pointed at the other. If all `n - 1` edges merge, `n` components have
become one, with no loop closed along the way.

The `find` walk uses path halving — `parent[x] = parent[parent[x]]` while
climbing — so each traversal leaves shorter paths behind it and later ones
cost less. With `n <= 2000` and at most 5000 edges the amortized per-edge
cost is effectively constant. The parent array is all the extra storage,
and a failing edge retires the search early — Example 2 never inspects
anything after `[0,2]`.

**Complexity:** `O(n + e·log n)` time, `O(n)` space.

## BFS from Node Zero

The same count, then a different question. A graph with `n - 1` edges that
is connected cannot contain a loop — each edge must be doing join work —
so connectivity alone finishes the proof. Where union-find watches loops
appear during assembly, this variant builds the adjacency lists and sends
one breadth-first walk across the finished graph: mark node `0`, then
repeatedly take the next queued node and mark its unmarked neighbours,
counting every node as it is first reached. The frontier spreads level by
level, so every node in node `0`'s component is counted exactly once; the
verdict is `visited == n`.

On Example 3 (`[[0,1],[2,3]]`) the walk marks `0` and `1`, empties the
queue, and stops at two of four nodes — two components, so `false`, which
the count check had already ruled out before any of this ran. A one-node
graph is the degenerate success: zero edges, and the walk counts node `0`
against `n = 1` immediately. The queue plus the mark array and adjacency
lists hold the memory; every node enters the queue at most once and every
edge is read twice, so the sweep is strictly linear.

**Complexity:** `O(n + e)` time, `O(n + e)` space.
