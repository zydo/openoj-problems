# Solutions — Least Cost to Supply All Sites

## Minimum Spanning Tree with a Virtual Source Node

"Build a source at site `i`" versus "link from a supplied neighbour" looks
like two different decisions, but both become edges in one graph: introduce
a virtual node 0 standing for supply itself, connect it to each site `i`
with weight `sources[i - 1]`, and keep the link edges as given. A site ends
up supplied exactly when it is connected to node 0 through the chosen edges,
so the cheapest plan is a minimum spanning tree over the `n + 1` nodes —
building a source is demoted to just another edge type.

![Sites plus the virtual node 0: its edges carry the source costs, and the
MST picks the three cheapest edges that connect
everything.](figures/solution-virtual-well.svg)

Kruskal's algorithm does the rest: pool the source edges with the link
edges, sort by cost, and accept an edge whenever its endpoints sit in
different union-find components, path-halving `find` keeping each lookup
cheap. Parallel links between the same two sites are harmless — the
cheapest sorts first and merges the components, and its duplicates are then
rejected by the same-roots check, which is exactly what Example 2 relies
on.

A spanning tree over `n + 1` nodes holds exactly `n` edges, so the scan
stops at `used == n`; node 0 touches every site, the graph is connected by
construction, and no input can fail. For `sources = [4,3,5]` with links
`[1,2,1]` and `[1,3,2]`, both links are taken first and the cheapest source
edge (3, at site 2) closes the tree — 6 in total.

With `N` sites and `P` links, sorting the pooled `N + P` edges dominates;
the union-find sweep afterwards is nearly linear.

**Complexity:** `O((N + P) log(N + P))` time, `O(N + P)` space.
