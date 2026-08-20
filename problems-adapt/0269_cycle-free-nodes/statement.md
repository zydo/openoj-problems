# Cycle-Free Nodes

## Description

A directed graph on `n` nodes numbered `0` through `n - 1` arrives as an
adjacency list `graph`, where the entry `graph[i]` lists every node that node
`i` points at.

Walk from a node by repeatedly following an outgoing edge. Some walks run
forever, because they enter a cycle; others come to a stop at a node with no
outgoing edges. Call a node **cycle-free** when no walk that begins there can
run forever — equivalently, when no cycle is reachable from it.

Report every cycle-free node, in increasing numeric order.

### Example 1

```text
Input: graph = [[1],[2],[0,3],[4],[],[3]]
Output: [3,4,5]
Explanation: Node 4 has nowhere to go. Nodes 3 and 5 feed into it and nowhere
else. Nodes 0, 1 and 2 form a ring, so a walk that reaches any of them can go
around forever, even though 2 also offers an exit toward 3.
```

### Example 2

```text
Input: graph = [[0,1],[2],[],[]]
Output: [1,2,3]
Explanation: Node 0 points at itself, which is already an endless walk. The
other three nodes lead only to dead ends.
```

### Example 3

```text
Input: graph = [[1],[2],[0]]
Output: []
Explanation: The whole graph is one ring, so no walk anywhere in it ever stops.
```

### Constraints

- `n`, the number of nodes, equals `graph.length`, and `1 <= n <= 10^4`
- each `graph[i]` holds between `0` and `n` entries, strictly increasing
- every entry of `graph[i]` is a node number between `0` and `n - 1`
- an edge from a node to itself is allowed
- the total number of edges is at least `1` and at most `4 * 10^4`

## Hints

### Hint 1

Flip the question around: a node fails to be cycle-free exactly when it can
reach a cycle. Nodes with no outgoing edges are the trivially cycle-free ones,
and everything else has to earn the label through its successors.

### Hint 2

A node deserves the label once *all* of its out-neighbors have it. That is a
counting condition, so keep a per-node tally of out-edges not yet accounted
for, and build the edge-reversed adjacency list so you can find the nodes whose
tally to decrement.

### Hint 3

Seed a queue with the zero-tally nodes and peel: pop a node, mark it, and
decrement the tally of each of its predecessors, enqueueing any that hit zero.
Whatever is never popped is tangled in a cycle or downstream of one. A
self-loop takes care of itself — the node's own tally can never fall to zero
before it is popped, and it is never popped.
