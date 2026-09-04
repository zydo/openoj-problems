# Nearest Node on a Tree Path

## Description

You are given a positive integer `n`, the number of nodes of a tree. The
nodes are numbered `0` through `n - 1`, and a 2D array `edges` of length
`n - 1` describes the tree: `edges[i] = [u, v]` means `u` and `v` are joined
by an edge, which may be walked in either direction.

You are also given a 0-indexed array `query` of length `m`, where
`query[i] = [start, end, node]` asks about the path that walks from `start`
to `end` through the tree: among the nodes lying on that path, which one is
closest to `node`?

Return an array `answer` of length `m` where `answer[i]` settles the `i`th
query.

### Example 1

![diagram](figures/2277-1.svg)

```text
Input: n = 7, edges = [[0,1],[0,2],[0,3],[1,4],[2,5],[2,6]], query = [[5,3,4],[5,3,6]]
Output: [0,2]
Explanation:
Walking from node 5 to node 3 visits the nodes 5, 2, 0, 3 in order.
Among those, node 0 is the one nearest to node 4, two edges away, so the
first query answers 0.
Node 2 lies one edge from node 6 and is the closest path node to it, so the
second query answers 2.
```

### Example 2

![diagram](figures/2277-2.svg)

```text
Input: n = 3, edges = [[0,1],[1,2]], query = [[0,1,2]]
Output: [1]
Explanation:
The route from node 0 to node 1 passes through nodes 0 and 1 only.
Node 1 sits one edge from node 2 while node 0 is two edges away, so the
answer is 1.
```

### Example 3

![diagram](figures/2277-3.svg)

```text
Input: n = 3, edges = [[0,1],[1,2]], query = [[0,0,0]]
Output: [0]
Explanation:
Here start and end coincide, so the path holds the single node 0 — and that
node is trivially the answer.
```

### Constraints

- `1 <= n <= 1000`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= u, v <= n - 1` for every edge, with `u != v`
- `1 <= query.length <= 1000`
- `query[i].length == 3`
- `0 <= start, end, node <= n - 1`
- The edges always form a tree.

## Hints

### Hint 1

For one query it is enough to know the distance from `node` to every vertex
of the tree, and one breadth-first sweep from `node` records all of them.

### Hint 2

The nodes a `start`–`end` path visits can be enumerated with a depth-first
walk: head from `start` until `end` is reached, keeping the route taken.

### Hint 3

The answer is then whichever path node attains the smallest recorded
distance; shortest-path lemmas guarantee it is unique.
