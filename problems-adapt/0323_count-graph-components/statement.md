# Count Graph Components

## Description

A graph has `n` nodes numbered `0` through `n - 1`. You are given the integer
`n` and an array `edges`, where `edges[i] = [a, b]` means nodes `a` and `b`
are joined by an undirected edge.

Return how many connected components the graph has. A component is a maximal
set of nodes reachable from one another; a node with no incident edge counts
as one component on its own.

### Example 1

```text
Input: n = 7, edges = [[0,1],[1,2],[2,0],[3,4]]
Output: 4
Explanation: Nodes 0, 1 and 2 form a cycle, nodes 3 and 4 are joined by one
edge, and nodes 5 and 6 touch no edge at all. That is four components.
```

### Example 2

```text
Input: n = 6, edges = [[0,1],[1,3],[3,5],[5,4],[4,2]]
Output: 1
Explanation: The edges thread every node into a single path 0-1-3-5-4-2.
```

### Example 3

```text
Input: n = 4, edges = [[2,3]]
Output: 3
Explanation: Nodes 2 and 3 form one component; nodes 0 and 1 stand alone,
contributing one component each.
```

### Constraints

- `1 <= n <= 2000`
- `1 <= edges.length <= 5000`
- each edge is a pair `[a, b]` with `0 <= a, b < n`
- `a != b`, and no edge is repeated.

## Hints

### Hint 1

Begin with `n` separate components. Every edge whose endpoints currently sit
in different components fuses two of them into one, dropping the count by
exactly one.

### Hint 2

A union-find (disjoint set union) structure with path compression answers
"do these endpoints already share a component?" in near-constant time per
edge.

### Hint 3

Without union-find: sweep nodes in order, and launch a DFS or BFS from each
node not yet visited. The number of launches is the number of components.
