# Odd-Cost Paths To The Deepest Node II

## Description

An undirected tree holds `n` nodes numbered `1` to `n`, rooted at node
`1`, and arrives as `edges` — a list of `n - 1` pairs where
`edges[i] = [ui, vi]` joins nodes `ui` and `vi`.

Every edge starts at weight 0 and must end up carrying a weight of
exactly `1` or `2`. The cost of a route between two nodes is the sum of
the weights along it.

Answer a list of queries `queries`, where `queries[i] = [ui, vi]`: for
each, count the assignments of weights to the route's edges that make
its total cost odd. Edges off the queried route are ignored. Each count
can be enormous, so report it modulo 10⁹ + 7, gathered into an array
`answer` aligned with `queries`.

### Example 1

![diagram](figures/3559-1.svg)

```text
Input: edges = [[1,2]], queries = [[1,1],[1,2]]
Output: [0,1]
Explanation:
Query [1,1]: a node's route to itself carries no edges, so the cost is 0
and no assignment can make it odd.
Query [1,2]: weighting the lone edge 1 gives an odd cost and weighting it
2 gives an even one — exactly one assignment qualifies.
```

### Example 2

![diagram](figures/3559-2.svg)

```text
Input: edges = [[1,2],[1,3],[3,4],[3,5]], queries = [[1,4],[3,4],[2,5]]
Output: [2,1,4]
Explanation:
Query [1,4]: the route runs 1 → 3 → 4 over two edges, and the weight
pairs (1, 2) and (2, 1) are the ones producing an odd total.
Query [3,4]: a single edge joins these nodes, so only the weight 1
yields an odd cost.
Query [2,5]: the three-edge route 2 → 1 → 3 → 5 turns odd under the
assignments (1, 2, 2), (2, 1, 2), (2, 2, 1), and (1, 1, 1) — four in all.
```

### Constraints

- `2 <= n <= 10⁵`
- `edges.length == n - 1`
- `edges[i] == [ui, vi]`
- `1 <= queries.length <= 10⁵`
- `queries[i] == [ui, vi]`
- `1 <= ui, vi <= n`
- The listed edges form a valid tree.

## Hints

### Hint 1

As in part I, a weight of 2 is parity-invisible: a route of `d` edges has
odd cost under exactly `2^(d-1)` of its `2^d` assignments — and 0 ways
when `d = 0`.

### Hint 2

Root the tree and record depths, then produce each query's route length
`depth[u] + depth[v] - 2 * depth[lca]` in `O(log n)` with a binary-lifting
lowest-common-ancestor table.
