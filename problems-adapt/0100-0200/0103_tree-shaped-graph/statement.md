# Tree-Shaped Graph

## Description

You are given an undirected graph on `n` nodes labelled `0` to `n - 1`,
described by a list of `edges` in which `edges[i] = [a_i, b_i]` joins node
`a_i` to node `b_i` in both directions.

Decide whether this graph is a tree: every node reachable from every other by
exactly one route. Return `true` if it is and `false` if it is not.

### Example 1

```text
Input: n = 6, edges = [[5,4],[4,0],[0,1],[1,2],[0,3]]
Output: true
Explanation: Six nodes, five edges, and the whole thing hangs together — from 0
you can reach 1, 2, 3 and, through 4, the node 5, with no second route
anywhere.
```

### Example 2

```text
Input: n = 3, edges = [[0,1],[1,2],[0,2]]
Output: false
Explanation: Three edges on three nodes is already one too many, and the third
edge closes the loop 0 - 1 - 2.
```

### Example 3

```text
Input: n = 4, edges = [[0,1],[2,3]]
Output: false
Explanation: No loops here, but the graph falls into two pieces. Four nodes
need three edges to connect, and only two are on offer.
```

### Constraints

- `1 <= n <= 2000`
- `0 <= edges.length <= 5000`
- Every edge has exactly two endpoints, each between `0` and `n - 1`.
- The two endpoints of an edge differ, and no edge appears twice.

## Hints

### Hint 1

Count first. `n` nodes joined as a tree carry exactly `n - 1` edges — fewer can
never link everything, more must loop. Any other count settles the answer with
no searching at all.

### Hint 2

After the count clears, one question remains: does some edge join two nodes
that are already linked by another route? Such an edge creates the second path,
and the graph stops being a tree.

### Hint 3

Track components while you add edges. When an edge's two endpoints already sit
in one component, that edge is the offender — stop and answer `false`. If all
`n - 1` edges pass, the graph is one component with no loop.
