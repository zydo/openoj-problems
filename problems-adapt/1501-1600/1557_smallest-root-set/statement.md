# Smallest Root Set

## Description

A directed acyclic graph has `n` vertices labelled `0` through `n - 1`,
given to you through an array `edges` whose entry `edges[i] = [fromi, toi]`
is one directed edge from `fromi` to `toi`.

Choose as few vertices as possible so that every vertex of the graph can be
reached by following edges outward from the chosen set. The statement
guarantees this smallest choice is unique.

The chosen vertices may be listed in any order.

### Example 1

![diagram](figures/1557-1.svg)

```text
Input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
Output: [0,3]
Explanation: No single vertex reaches everything here. Starting from 0
covers [0,1,2,5], and starting from 3 covers [3,4,2,5], so the answer is
[0,3].
```

### Example 2

![diagram](figures/1557-2.svg)

```text
Input: n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
Output: [0,2,3]
Explanation: Vertices 0, 2, and 3 have no edges leading into them, so each
has to be picked; between them they already reach 1 and 4.
```

### Example 3

```text
Input: n = 4, edges = [[1,0],[2,0],[3,0]]
Output: [1,2,3]
Explanation: Three separate chains flow into 0, and none of 1, 2, 3 is
reachable from the others.
```

### Constraints

- `2 <= n <= 10^5`
- `1 <= edges.length <= min(10^5, n * (n - 1) / 2)`
- `edges[i].length == 2`
- `0 <= fromi, toi < n`
- All pairs `(fromi, toi)` are distinct.

## Hints

### Hint 1

A vertex with no incoming edge cannot be arrived at from anywhere — only
from itself.

### Hint 2

Every other vertex has at least one incoming edge, and whatever that edge
comes from is reachable in turn.

### Hint 3

So the whole answer is just the vertices whose incoming-edge count is
zero.
