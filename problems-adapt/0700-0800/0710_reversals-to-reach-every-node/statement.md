# Reversals to Reach Every Node

## Description

A directed graph has `n` nodes labeled `0` to `n - 1` and `n - 1` edges.
Ignoring directions, the graph is a tree.

You are given the integer `n` and the array `edges`, where `edges[i] = [ui, vi]`
is a directed edge from node `ui` to node `vi`.

Reversing an edge swaps its direction: an edge `ui -> vi` becomes `vi -> ui`.

For each node `i` independently, find the smallest number of reversals after
which every other node can be reached from `i` by following directed edges.
Return the array `answer` of length `n`, where `answer[i]` is that minimum for
node `i`.

### Example 1

```text
Input: n = 5, edges = [[0,1],[2,0],[0,3],[4,0]]
Output: [2,3,1,3,1]
Explanation: With node 0 as the start, the edges 2 -> 0 and 4 -> 0 point the
wrong way, so 2 reversals suffice; every other start needs more, e.g. from
node 1 all of 0 -> 1, 2 -> 0 and 4 -> 0 must be flipped, for 3.
```

### Example 2

```text
Input: n = 4, edges = [[0,1],[2,1],[2,3]]
Output: [1,2,1,2]
Explanation: Node 2 already reaches 1 and 3 directly, and flipping 0 -> 1
into 1 -> 0 opens the path 2 -> 1 -> 0. The mirror-image starts 0 and 3 each
need 1, and node 1, pointed at from both sides, needs 2.
```

### Example 3

```text
Input: n = 6, edges = [[0,1],[1,2],[1,3],[3,4],[3,5]]
Output: [0,1,2,2,3,3]
Explanation: Every edge points away from node 0, so answer[0] = 0. Moving the
start further from 0 adds one reversal per edge on the way: the two leaves 4
and 5 sit at depth 3 and each needs 3.
```

### Constraints

- `2 <= n <= 10^5`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= ui, vi < n`
- `ui != vi`
- With directions ignored, the edges form a tree.

## Hints

### Hint 1

From a fixed start node, every edge of the tree must end up pointing away
from it. So the cost of a start is just "how many edges currently point the
other way".

### Hint 2

Compute that count for one fixed root with a bottom-up pass over the tree:
each subtree contributes its own cost plus 1 if the edge joining it to its
parent is aimed at the parent.

### Hint 3

Computing this per node separately is quadratic. What changes about the count
when the root moves across a single edge, and by how much?

### Hint 4

Moving the root from a node to its neighbor makes their shared edge either
count or stop counting, and leaves every other edge's contribution unchanged —
a +1/-1 adjustment. Push these adjustments down in a second top-down sweep.
