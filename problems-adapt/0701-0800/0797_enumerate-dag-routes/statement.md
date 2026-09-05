# Enumerate DAG Routes

## Description

`graph` describes a directed acyclic graph whose nodes are numbered `0` through
`n - 1`: entry `graph[i]` lists exactly the nodes that one edge out of `i`
leads to. Collect every route that begins at node `0` and ends at node
`n - 1`, writing each route as the sequence of nodes it passes through.

Because the answer is compared exactly, the routes must come back in the order a
depth-first exploration discovers them — start at node `0`, and at every node
follow its outgoing edges in the order `graph[i]` gives them.

### Example 1

```text
Input: graph = [[1,2],[3],[3,4],[5],[5],[]]
Output: [[0,1,3,5],[0,2,3,5],[0,2,4,5]]
Explanation: The first edge out of node 0 leads to 1, which offers only
node 3, which offers only node 5. Backing up to node 0 and taking its second
edge reaches node 2, and from there both of its edges finish the walk.
```

### Example 2

```text
Input: graph = [[1],[2],[3],[]]
Output: [[0,1,2,3]]
Explanation: Every node has a single outgoing edge, so the graph is one chain
and there is nothing to choose between.
```

### Example 3

```text
Input: graph = [[4,1],[2],[],[5],[3],[]]
Output: [[0,4,3,5]]
Explanation: The first edge out of node 0 reaches node 4, then node 3, then the
last node. The other edge leads to node 1 and then node 2, which has no
outgoing edges and is not the destination, so that branch contributes nothing.
```

### Constraints

- `n == graph.length`
- `2 <= n <= 15`
- `0 <= graph[i][j] < n`
- `graph[i][j] != i` — no node has an edge to itself
- the entries within one `graph[i]` are distinct
- the graph contains no directed cycle

## Hints

### Hint 1

Grow a route one node at a time out of node `0`, keeping the nodes chosen so far
in a list as you descend.

### Hint 2

The moment the list ends at node `n - 1` you are holding a finished route.
Append a _copy_ of it to the answer — the working list keeps changing — and
stop extending that branch.

### Hint 3

After returning from an edge, drop the node you had appended, so the next edge
out of the same node starts from the same prefix. No visited set is required:
an acyclic graph cannot send a walk back through a node it already holds, and
different routes are supposed to share prefixes.
