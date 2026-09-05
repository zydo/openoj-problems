# Island Link Cost

## Description

The square binary matrix `grid` contains exactly two islands. A `1` is
land and a `0` is water; cells belong to the same island only when they
can be connected by repeatedly moving one cell up, down, left, or right
through land.

You may convert water cells into land. Return the fewest conversions
needed to join the two islands into one connected landmass.

### Example 1

```text
Input: grid = [[0,1,0],[0,0,1],[0,0,0]]
Output: 1
Explanation: Converting the center cell at row 1, column 1 joins the two
islands through cardinal-direction moves.
```

### Example 2

```text
Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
Output: 3
```

### Example 3

```text
Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,1,1]]
Output: 4
```

### Constraints

- `n == grid.length == grid[i].length`
- `2 <= n <= 100`
- Every `grid[i][j]` is either `0` or `1`.
- `grid` contains exactly two islands.
