# Bridging Trees To Count Kin II

## Description

Two undirected trees are on the table. The first has `n` nodes labeled
`0` through `n - 1`; the second has `m` nodes labeled `0` through
`m - 1`. Their edge sets arrive as the 2D arrays `edges1` (length
`n - 1`, with `edges1[i] = [ai, bi]` joining `ai` and `bi` in the first
tree) and `edges2` (length `m - 1`, with `edges2[i] = [ui, vi]` joining
`ui` and `vi` in the second tree).

Node `u` is kin to node `v` when the path between them crosses an even
number of edges. Every node is kin to itself.

For each node `i` of the first tree you get to add one bridge — a single
edge from some node of the first tree to some node of the second tree —
and then count how many nodes are kin to `i` across the merged graph.
Choose the bridge that makes that count as large as possible. Scenarios
are judged one at a time: take the bridge back down before weighing the
next one.

Return an array `answer` of `n` integers where `answer[i]` is that
largest possible kin count for node `i`.

### Example 1

![diagram](figures/3373-1.svg)

```text
Input: edges1 = [[0,1],[0,2],[2,3],[2,4]], edges2 = [[0,1],[0,2],[0,3],[2,7],[1,4],[4,5],[4,6]]
Output: [8,7,7,8,8]
Explanation: For i = 0 the best bridge runs from node 0 of the first
tree to node 0 of the second tree; for i = 1 from node 1 to node 4; for
i = 2 from node 2 to node 7; for i = 3 from node 3 to node 0; and for
i = 4 from node 4 to node 4.
```

### Example 2

![diagram](figures/3373-2.svg)

```text
Input: edges1 = [[0,1],[0,2],[0,3],[0,4]], edges2 = [[0,1],[1,2],[2,3]]
Output: [3,6,6,6,6]
Explanation: Kinship depends only on the two endpoints' depth parities,
so inside the first tree every node i starts with exactly its own class;
bridging from node i to any node of the second tree then adds the larger
of that tree's two classes.
```

### Constraints

- `2 <= n, m <= 10⁵`
- `edges1.length == n - 1`
- `edges2.length == m - 1`
- `edges1[i].length == edges2[i].length == 2`
- `edges1[i] = [ai, bi]`
- `0 <= ai, bi < n`
- `edges2[i] = [ui, vi]`
- `0 <= ui, vi < m`
- The input is generated such that edges1 and edges2 represent valid trees.

## Hints

### Hint 1

In a tree, whether the path to `u` has even length depends only on the
depth parity of the endpoint — nodes split into two classes. Tally how
large each class is.

### Hint 2

For the second tree, the bridge lands on some node `v`, and the kin it
contributes sit in the opposite class from `v` — so what matters is the
larger of the two class sizes there.

### Hint 3

`answer[i]` combines a per-node term — the size of node `i`'s own class
in the first tree — with that single shared maximum from the second
tree.
