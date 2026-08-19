# Distances in a Growing Digraph

## Description

Start with a directed, weighted digraph on `n` nodes numbered `0` to
`n - 1`. Its arcs come from the array `edges`, where `edges[i] =
[fromᵢ, toᵢ, costᵢ]` means an arc runs from `fromᵢ` to `toᵢ` and costs
`costᵢ` to travel. New arcs may appear over time; none ever disappear or
change their cost.

Implement the `Graph` class:

- `Graph(int n, int[][] edges)` — builds the digraph on `n` nodes
  with the arcs in `edges`.
- `void addEdge(int[] edge)` — appends the arc `edge = [from, to, cost]`.
  No arc between these two nodes exists beforehand.
- `int shortestPath(int node1, int node2)` — returns the smallest total
  cost of traveling from `node1` to `node2`, where the cost of a route is
  the sum of its arc costs. If no route leads there, returns `-1`.

### Example 1

```text
Input:
["Graph", "shortestPath", "shortestPath", "addEdge", "shortestPath", "shortestPath"]
[[5, [[0, 1, 4], [1, 2, 3], [2, 4, 7], [0, 3, 2], [3, 4, 10], [4, 0, 1]]], [0, 4], [2, 0], [[3, 1, 1]], [0, 2], [4, 4]]
Output: [null, 12, 8, null, 6, 0]
Explanation:
Graph roads = new Graph(
    5, [[0, 1, 4], [1, 2, 3], [2, 4, 7], [0, 3, 2], [3, 4, 10], [4, 0, 1]]);
roads.shortestPath(0, 4); // 12 — the route 0 -> 3 -> 4 costs 2 + 10,
                            // beating 0 -> 1 -> 2 -> 4 at 4 + 3 + 7.
roads.shortestPath(2, 0); // 8 — 2 -> 4 -> 0 costs 7 + 1.
roads.addEdge([3, 1, 1]); // a one-cost hop from 3 straight to 1.
roads.shortestPath(0, 2); // 6 — now 0 -> 3 -> 1 -> 2 costs 2 + 1 + 3.
roads.shortestPath(4, 4); // 0 — a node is zero cost from itself.
```

### Example 2

```text
Input:
["Graph", "shortestPath", "shortestPath", "shortestPath", "shortestPath"]
[[3, [[1, 2, 5], [2, 1, 1]]], [0, 2], [1, 2], [2, 1], [2, 2]]
Output: [null, -1, 5, 1, 0]
Explanation: Nodes 1 and 2 form a two-arc cycle, and node 0 has no arcs at
all: nothing reaches it and it reaches nothing.
```

### Example 3

```text
Input:
["Graph", "shortestPath", "addEdge", "shortestPath", "shortestPath"]
[[3, [[0, 1, 3]]], [0, 2], [[1, 2, 6]], [0, 2], [1, 0]]
Output: [null, -1, null, 9, -1]
Explanation: Node 2 starts unreachable; the added arc 1 -> 2 opens the
route 0 -> 1 -> 2 at cost 3 + 6. Traveling 1 -> 0 stays impossible, since
arcs have direction.
```

### Constraints

- `1 <= n <= 100`
- `0 <= edges.length <= n * (n - 1)`
- `edges[i].length == edge.length == 3`
- `0 <= fromᵢ, toᵢ, from, to, node1, node2 <= n - 1`
- `1 <= costᵢ, cost <= 10⁶`
- At no point does the digraph contain a repeated arc or an arc from a
  node to itself.
- At most `100` calls will be made to `addEdge`.
- At most `100` calls will be made to `shortestPath`.

### Follow-up

With a hundred nodes, a hundred insertions, and a hundred queries,
recomputing everything per query is already quick. At what point would
that stop holding, and what would you memoize first?

## Hints

### Hint 1

Arcs are appended and never taken away or re-priced, so the digraph lives
happily as an adjacency list that insertion extends in constant time. The
query carries all the cost.

### Hint 2

Every arc cost is positive, and positive costs are the precondition for
settling nodes greedily: take them cheapest-tentative-distance first, one
final answer apiece.

### Hint 3

A min-heap keyed by `(distance, node)` produces that order without
sorting. Pop, discard entries that no longer match the recorded distance,
relax the arcs leaving the node — and quit as soon as the destination is
popped, since its distance is settled at that moment.
