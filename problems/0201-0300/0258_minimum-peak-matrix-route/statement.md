# Minimum Peak Matrix Route

## Description

Each cell of the square matrix `heights` has a distinct nonnegative height.
A route begins at the top-left cell, ends at the bottom-right cell, and moves
only between orthogonally adjacent cells.

The cost of a route is the greatest cell height visited along it. Return the
smallest possible route cost.

### Example 1

```text
Input: heights = [[2,0],[3,1]]
Output: 2
Explanation: Moving right and then down visits heights 2, 0, and 1, whose
maximum is 2.
```

### Example 2

```text
Input: heights = [[5,1,7],[4,8,2],[3,0,6]]
Output: 6
Explanation: The route 5 -> 4 -> 3 -> 0 -> 6 has peak 6. Any route must
include both endpoint heights, so no peak below 6 is possible.
```

### Constraints

- `n == heights.length == heights[i].length`
- `1 <= n <= 50`
- `0 <= heights[i][j] < n^2`
- All matrix values are distinct.

## Hints

### Hint 1

Treat a path's distance as its maximum visited height rather than a sum.

### Hint 2

Dijkstra's algorithm still applies because extending a route can never lower
its peak.

### Hint 3

Relax a neighboring cell with `max(currentPeak, neighborHeight)`.
