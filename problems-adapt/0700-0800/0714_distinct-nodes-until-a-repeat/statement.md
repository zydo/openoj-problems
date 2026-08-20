# Distinct Nodes Until a Repeat

## Description

A directed graph has `n` nodes numbered `0` to `n - 1` and exactly `n`
edges. The array `edges` describes them: node `i` has one outgoing edge,
to node `edges[i]`.

Walk the graph as follows: start at a node `x`, repeatedly step along the
outgoing edge, and stop the first time you arrive at a node you have
already been to during this walk.

Return an array `answer` where `answer[i]` is the number of distinct nodes
the walk from `i` steps through before that first repeat.

### Example 1

```text
Input: edges = [1,2,3,0,2,4]
Output: [4,4,4,4,5,6]
Explanation: Nodes 0, 1, 2, 3 form the cycle 0 -> 1 -> 2 -> 3 -> 0, so each
of them revisits itself after seeing 4 nodes. Node 4 steps into the cycle at
2 and sees 5 nodes; node 5 goes 5 -> 4 -> 2 -> 3 -> 0 -> 1 -> 2 and sees 6.
```

### Example 2

```text
Input: edges = [1,0,3,2,0,2]
Output: [2,2,2,2,3,3]
Explanation: The graph splits into two independent parts: the 2-cycle
0 <-> 1 and the 2-cycle 2 <-> 3. Nodes inside either cycle see exactly 2;
nodes 4 and 5 hang one step off a cycle and see 3.
```

### Example 3

```text
Input: edges = [2,3,4,1,1]
Output: [5,2,4,2,3]
Explanation: The walk from 0 is 0 -> 2 -> 4 -> 1 -> 3 -> 1, five distinct
nodes before the repeat. Nodes 1 and 3 lie on the 2-cycle 1 <-> 3; nodes 4
and 2 reach it in one and two steps, seeing 3 and 4 nodes.
```

### Constraints

- `n == edges.length`
- `2 <= n <= 10^5`
- `0 <= edges[i] <= n - 1`
- `edges[i] != i`

## Hints

### Hint 1

Since every node has exactly one outgoing edge, what do all sufficiently
long walks eventually do? What does that say the graph's shape must be?

### Hint 2

The graph is a disjoint union of "rho" pieces: one cycle per piece with
trees draining into it. For a node on a cycle, the answer is just that
cycle's length.

### Hint 3

For a node off the cycles, the answer is its cycle's length plus its
distance to the cycle. Resolving each piece in one pass — cycle first, then
the trees hanging off it, reusing answers of already-resolved nodes — keeps
the whole computation linear.
