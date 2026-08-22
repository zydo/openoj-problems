# Solutions — Least Cost to Supply All Sites

"Build a source at site `i`" versus "link from a supplied neighbour" looks
like two different decisions, but both become edges in one graph: introduce
a virtual node 0 standing for supply itself, connect it to each site `i`
with weight `sources[i - 1]`, and keep the link edges as given. A site ends
up supplied exactly when it is connected to node 0 through the chosen edges,
so the cheapest plan is a minimum spanning tree over the `n + 1` nodes —
building a source is demoted to just another edge type. Two builders find
that tree here: Kruskal pools all the edges and sorts them once, while Prim
grows the tree straight out of node 0, one cheapest frontier edge at a
time.

## Minimum Spanning Tree with a Virtual Source Node

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

## Prim Seeded from the Virtual Node

Kruskal orders every edge up front; Prim never sorts at all. The tree
starts at node 0 — supply itself, keyed 0 — and each step joins the
cheapest edge leading from the supplied region to a site still outside it.
The greedy choice is the same, only made locally: the heap holds the
frontier's candidates, never the whole edge set.

The code builds one adjacency list over the `n + 1` nodes — every link in
both directions, plus a source edge from node 0 to each site — and seeds a
min-heap of `(cost, site)` records with `(0, 0)`. A pop that lands on an
unsettled site joins it at that cost and scans its adjacency, and an edge
is pushed only when it strictly improves the site's recorded `best`. The
two guards together make parallel links a non-event: in Example 2 the
cost-3 and cost-1 links sit in the heap as rival candidates for site 2,
the cheaper one settles it, and the loser is skipped as stale.

Node 0 touches every site, so the frontier never starves: the count of
settled nodes climbs to `n + 1`, where the loop stops with the answer
already banked. For `sources = [4,3,5]` with links `[1,2,1]` and
`[1,3,2]`, the heap opens with the source edges 4, 3 and 5; 3 settles site
2, then the links at 1 and 2 pull in sites 1 and 3 — the same 6, found by
growing rather than by sorting.

Each of the `N + P` edges is scanned exactly once, from whichever endpoint
settles first, and at most one record per edge ever enters the heap: a
linear sweep carries the real work and the heap only adds its logarithmic
toll per edge.

**Complexity:** `O((N + P) log N)` time, `O(N + P)` space.
