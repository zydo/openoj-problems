# Outline a Color Region

## Description

An `m x n` matrix `grid` gives every square a color value. Three more
integers — `row`, `col`, and `color` — describe a painting job on it.

Squares that share an edge — up, down, left, or right — are adjacent, and
the squares of one single color connected through such adjacencies form a
region.

A region's outline is made of the region squares that either lie on the
grid's edge (first or last row, first or last column) or have a neighbor
in some of the 4 directions belonging to a different region.

Repaint every outline square of the region containing `grid[row][col]`
with `color` and return the resulting matrix.

### Example 1

```text
Input: grid = [[4,4,7],[4,7,7],[4,4,4]], row = 1, col = 1, color = 9
Output: [[4,4,9],[4,9,9],[4,4,4]]
Explanation: The 7-colored squares at (0,2), (1,1), and (1,2) form the
region, and each one touches a differently colored neighbor, so all three
are outline squares.
```

### Example 2

```text
Input: grid = [[5,5],[5,5]], row = 0, col = 0, color = 2
Output: [[2,2],[2,2]]
Explanation: A single region covers the whole grid, and every square
lies on the grid edge, so all of them are repainted.
```

### Example 3

```text
Input: grid = [[8,8,8,8],[8,8,8,8],[8,8,3,8],[8,8,8,8]], row = 1, col = 1, color = 5
Output: [[5,5,5,5],[5,8,5,5],[5,5,3,5],[5,5,5,5]]
Explanation: Only the square at (1,1) sits away from the grid edge
surrounded entirely by same-colored squares, so it alone keeps its color.
The lone 3 belongs to a different region and stays put.
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 50`
- `1 <= grid[i][j], color <= 1000`
- `0 <= row < m`
- `0 <= col < n`

## Hints

### Hint 1

Assemble the whole region with a search, and judge each member's outline
status against the untouched colors; only once the region is fully known
should the new color be written in.
