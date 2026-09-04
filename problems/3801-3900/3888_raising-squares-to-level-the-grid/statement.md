# Raising Squares to Level the Grid

## Description

You are given an `m x n` integer matrix `grid` and an integer `k`. One
operation chooses any `k x k` square of cells that fits inside the grid —
rows `r` through `r + k - 1` and columns `c` through `c + k - 1` — and adds
`1` to every cell of that square.

Return the smallest number of operations after which all `m * n` cells hold
one common value, or `-1` if no sequence of operations can get there.

### Example 1

```text
Input: grid = [[2,4],[6,8]], k = 1
Output: 12
Explanation: Each operation raises a single cell, so the shared final
value has to be the largest entry, 8. The cost is (8 - 2) + (8 - 4) +
(8 - 6) + (8 - 8) = 6 + 4 + 2 + 0 = 12.
```

### Example 2

```text
Input: grid = [[2,2,5],[2,2,5],[5,5,5]], k = 2
Output: 3
Explanation: Lift the square covering the top-left four cells three
times. Every cell it touches goes 2 -> 5 and the rest of the grid was
already 5, so all nine cells agree after 3 operations.
```

### Example 3

```text
Input: grid = [[1,2],[2,1]], k = 2
Output: -1
Explanation: The only square that fits is the entire grid, so every
operation adds 1 to all four cells at once. The gap between the 1s and
the 2s never closes, making the task impossible.
```

### Constraints

- `1 <= m == grid.length <= 1000`
- `1 <= n == grid[i].length <= 1000`
- `-10⁵ <= grid[i][j] <= 10⁵`
- `1 <= k <= min(m, n)`

## Hints

### Hint 1

Treat the final shared value `T` as an unknown and ask, cell by cell,
what the operations starting at each position must contribute.

### Hint 2

Scan cells in row-major order: a cell that can host a square's top-left
corner must absorb exactly its shortfall there, since every square that
could still reach it is decided on the spot. A 2D prefix sum tells you
how many already-planned lifts cover the current cell.
