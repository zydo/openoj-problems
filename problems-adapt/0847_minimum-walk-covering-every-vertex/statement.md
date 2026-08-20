# Minimum Walk Covering Every Vertex

## Description

An undirected connected network has vertices numbered from `0` through `n - 1`.
Its adjacency list is `adjacency`, where `adjacency[i]` contains every vertex
joined to `i` by an edge.

Return the minimum number of edges in a walk that visits every vertex at least
once. The walk may begin and end anywhere, revisit vertices, and traverse an
edge more than once.

### Example 1

```text
Input: adjacency = [[1,2],[0],[0,3,4],[2],[2]]
Output: 5
Explanation: One optimal walk is 1 -> 0 -> 2 -> 3 -> 2 -> 4.
```

### Example 2

```text
Input: adjacency = [[3,1,2],[0,2,3],[0,1,3],[0,1,2]]
Output: 3
Explanation: In a complete four-vertex network, any ordering of the vertices gives a three-edge walk.
```

### Constraints

- `n == adjacency.length`
- `1 <= n <= 12`
- `0 <= adjacency[i].length < n`
- `adjacency[i]` does not contain `i`.
- If `j` appears in `adjacency[i]`, then `i` appears in `adjacency[j]`.
- The described network is connected.

## Hints

### Hint 1

A search state needs both the current vertex and the set of vertices already
visited. Store the set as a bitmask.

### Hint 2

Because the walk may begin anywhere, initialize the breadth-first search with
one singleton-mask state for every vertex.

### Hint 3

The first dequeued state whose mask contains every vertex has the minimum
possible distance.
