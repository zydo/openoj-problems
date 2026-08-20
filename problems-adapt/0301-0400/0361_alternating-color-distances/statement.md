# Alternating Color Distances

## Description

You are given a directed graph on `n` nodes labeled `0` through `n - 1`,
where every edge is colored either red or blue. Self-loops and parallel
edges may appear. The edges arrive as two lists:

- `redEdges[i] = [a, b]` is a red edge pointing from `a` to `b`.
- `blueEdges[j] = [u, v]` is a blue edge pointing from `u` to `v`.

A walk is **alternating** when no two consecutive edges of the walk share a
color. (The walk may begin with either color.)

Return an array of length `n` whose entry `x` is the number of edges on the
shortest alternating walk from node `0` to node `x`, or `-1` when no
alternating walk reaches `x`. The entry for node `0` is `0`.

### Example 1

```text
Input: n = 4, redEdges = [[0,2],[3,1]], blueEdges = [[2,3]]
Output: [0,3,1,2]
Explanation: The walk 0 -> 2 (red), 2 -> 3 (blue), 3 -> 1 (red) has three
edges, and no shorter alternating walk reaches node 1.
```

### Example 2

```text
Input: n = 4, redEdges = [[0,2],[2,3]], blueEdges = [[0,3]]
Output: [0,-1,1,1]
Explanation: Nodes 2 and 3 are each one edge away, via different colors.
Node 1 has no incoming edge at all.
```

### Example 3

```text
Input: n = 4, redEdges = [[0,2],[2,3]], blueEdges = [[3,2]]
Output: [0,-1,1,-1]
Explanation: Node 3 is visible from node 2, but the only edge into it is a
second red in a row, which alternation forbids — so it stays unreachable.
```

### Constraints

- `1 <= n <= 100`
- `0 <= redEdges.length, blueEdges.length <= 400`
- every edge has exactly two entries
- `0 <= a, b, u, v < n`

## Hints

### Hint 1

The distance to a node depends on more than the node: which color you
arrived on decides what may leave. What is the smallest extra bit that
turns this into an ordinary shortest-walk problem?

### Hint 2

Search over `(node, color just used)` states — twice as many as the nodes —
and from each state only edges of the other color are legal moves.

### Hint 3

The start node has no incoming edge, so begin from both of its color
states at distance zero; each node's answer is the smaller of its two
states, and untouched nodes stay `-1`.
