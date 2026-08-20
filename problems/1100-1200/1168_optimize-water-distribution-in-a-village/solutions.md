# Solutions — Optimize Water Distribution in a Village

## Minimum Spanning Tree with a Virtual Well Node

The choice "build a well at house i" or "pipe from a neighbor" can be unified into one graph problem: add a virtual node 0 representing the water source, connect it to each house `i` with an edge of weight `wells[i - 1]`, and keep the pipe edges as given. Every house is then supplied exactly when it is connected to node 0 in this augmented graph, and the cheapest such connection set is a minimum spanning tree on the `n + 1` nodes — building a well becomes just another edge type.

![Houses plus the virtual node 0: its edges carry the well costs, and the MST picks the three cheap edges.](figures/solution-virtual-well.svg)

Kruskal's algorithm solves it: collect all edges (well edges plus pipe edges), sort by cost, and accept an edge whenever its endpoints are in different union-find components, using path-halving `find` to keep lookups cheap. Duplicate pipes between the same houses are harmless — the cheaper one is sorted first and merges the components, so the others get rejected by the same-roots check.

A spanning tree of `n + 1` nodes has exactly `n` edges, so the loop stops as soon as `used == n`; since the graph is connected by construction (node 0 touches every house), the full tree is always reachable and no failure case exists. The example with `wells = [1,2,2]` illustrates the mechanism: the cheap well edge to house 1 is taken first, and the two unit pipes then hang the remaining houses off it for a total of 3.

Writing `N` for the house count and `P` for the pipe count, sorting the combined `N + P` edge list dominates the running time; the union-find passes over it are near-linear.

**Complexity:** `O((N + P) log(N + P))` time, `O(N + P)` space.
