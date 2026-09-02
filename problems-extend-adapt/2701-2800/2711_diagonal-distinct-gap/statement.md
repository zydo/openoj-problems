# Diagonal Distinct Gap

## Description

Work with an `m x n` grid of integers and build an `m x n` answer matrix.

Every cell sits on a diagonal running toward the bottom-right. For the cell
`grid[r][c]`, split that diagonal at the cell itself and count the distinct
values on the two halves:

- `leftAbove[r][c]` — how many distinct values appear on the diagonal
  segment running up and to the left of `grid[r][c]`, excluding the cell
  itself.
- `rightBelow[r][c]` — how many distinct values appear on the segment
  running down and to the right, again excluding the cell itself.
- Then `answer[r][c] = |leftAbove[r][c] - rightBelow[r][c]|`.

A diagonal is any chain of cells that starts on the top row or in the
leftmost column and steps down-right until it runs off the grid. The
diagram below highlights one such chain through the gray cell `(2, 3)`:
its up-left half is shown in red and its down-right half in blue.

![diagram](figures/2711-1.svg)

Return the answer matrix.

### Example 1

```text
Input: grid = [[4,1],[2,3]]
Output: [[1,0],[0,1]]
Explanation: Cell (0,0) sees only the value 3 below-right of it, so its gap
is |0 - 1| = 1. Cell (1,1) mirrors that with the value 4 above-left. The
other two cells have empty segments on both sides.
```

### Example 2

```text
Input: grid = [[7,8,9],[9,8,7],[7,7,9]]
Output: [[2,1,0],[1,0,1],[0,1,2]]
Explanation: The main diagonal carries 7, 8, 9 — all different. Cell (0,0)
has no values above-left but two distinct values (8 and 9) below-right, for
a gap of 2; the center cell (1,1) is balanced, 1 versus 1, for a gap of 0.
```

### Example 3

```text
Input: grid = [[5]]
Output: [[0]]
Explanation: A single cell has empty segments in both directions.
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n, grid[i][j] <= 50`

## Hints

### Hint 1

Walk one diagonal at a time with a set of already-seen values: a cell's
up-left count is the set's size on arrival, and a second walk back up the
same diagonal gives its down-right count the same way.
