# Longest Cycle in a Functional Graph

## Description

You are given a directed graph on `n` nodes numbered `0` through `n - 1`, in
which every node has at most one outgoing edge — a functional graph.

The graph arrives as an integer array `edges` of length `n`: node `i` points
to node `edges[i]`, and `edges[i] == -1` says that node `i` points nowhere.

Return the length of the longest cycle, where a cycle is a directed walk that
returns to the node it started from. If the graph has no cycle at all,
return `-1`.

### Example 1

```text
Input: edges = [1,2,0,1]
Output: 3
Explanation: Node 0 points to 1, node 1 to 2, and node 2 back to 0, closing
a cycle of length 3. Node 3 also points to 1, joining that cycle by a tail,
but the tail is not part of the loop.
```

### Example 2

```text
Input: edges = [1,-1,1]
Output: -1
Explanation: Every walk here eventually stops at node 1, which points
nowhere. Nothing loops, so the answer is -1.
```

### Example 3

```text
Input: edges = [3,2,1,4,5,3]
Output: 3
Explanation: The graph holds two disjoint cycles: 1 -> 2 -> 1 of length 2
and 3 -> 4 -> 5 -> 3 of length 3. Node 0 hangs off the longer one as a
tail. The longest cycle has length 3.
```

### Constraints

- `n == edges.length`
- `2 <= n <= 10⁵`
- `-1 <= edges[i] < n`
- `edges[i] != i`

## Hints

### Hint 1

With at most one outgoing edge per node, how many different cycles can a
single node lie on?

### Hint 2

Walk forward from any node: you either reach a dead end or meet a node for
the second time. What does meeting a node from your own current walk tell
you, and how long is the loop you just found?

### Hint 3

Stamp each node with the step at which you reached it, and mark whole walks
as finished so no walk is ever repeated.
