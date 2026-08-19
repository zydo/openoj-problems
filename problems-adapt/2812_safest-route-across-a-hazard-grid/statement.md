# Safest Route Across a Hazard Grid

## Description

You are given an `n x n` grid where a cell holds `1` if it contains a hazard
and `0` if it is empty. At least one hazard is present.

The clearance of a cell is its Manhattan distance to the nearest hazard cell.
The clearance of a route is the smallest clearance of any cell the route
visits.

Starting at `(0, 0)`, you may step to any of the four adjacent cells — hazard
cells included — any number of times. Return the largest clearance achievable
by a route that reaches `(n - 1, n - 1)`.

The Manhattan distance between `(a, b)` and `(x, y)` is `|a - x| + |b - y|`.

### Example 1

```text
Input: grid = [[0,0,1],[0,0,0],[1,0,0]]
Output: 1
Explanation: Hazards sit at (0, 2) and (2, 0). Both corners have clearance 2,
but any route between them must pass through a cell adjacent to a hazard,
such as (0, 1) or (1, 0), whose clearance is 1. So the best possible
clearance is 1.
```

### Example 2

```text
Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
Output: 3
Explanation: The single hazard occupies (0, 3). Stepping down the left column
and then across the bottom row keeps every visited cell at distance at least
3 from it — the two corners are exactly 3 away — and no route can do better
because both endpoints themselves have clearance 3.
```

### Example 3

```text
Input: grid = [[0,1,0],[1,0,1],[0,1,0]]
Output: 0
Explanation: Every neighbor of the start is a hazard, so the very first step
lands on a hazard and the route's clearance is 0.
```

### Constraints

- `1 <= grid.length == n <= 400`
- `grid[i].length == n`
- every `grid[i][j]` is `0` or `1`
- the grid contains at least one hazard

## Hints

### Hint 1

How far each cell sits from the nearest hazard can be learned for the whole
grid at once, not cell by cell.

### Hint 2

Asking whether some route achieves clearance `v` is asking whether the two
corners remain connected once every cell with clearance below `v` is removed.

### Hint 3

That question's answer only turns from yes to no as `v` grows, which invites
a search over `v` rather than a direct construction.
