# Patch Updates On A Grid

## Description

A grid of integers needs to support painting whole rectangular patches at
once, plus single-cell reads.

Implement the `PatchableGrid` class:

- `PatchableGrid(int[][] rectangle)` initializes the grid with the given
  values.
- `void updatePatch(int row1, int col1, int row2, int col2, int
newValue)` overwrites every cell with row in `[row1, row2]` and column
  in `[col1, col2]` (both bounds inclusive) with `newValue`.
- `int getValue(int row, int col)` returns the current value of the cell
  at `(row, col)`.

### Example 1

```text
Input:
["PatchableGrid","getValue","updatePatch","getValue","getValue","getValue"]
[[[[1,2,3],[4,5,6],[7,8,9]]],[0,0],[0,0,1,1,100],[0,0],[1,1],[2,2]]
Output: [null,1,null,100,100,9]
Explanation: The 3×3 grid starts as 1…9 in reading order. Painting the
patch from (0,0) to (1,1) overwrites its four cells with 100, so (0,0)
and (1,1) read 100 while the untouched (2,2) still reads 9.
```

### Example 2

```text
Input:
["PatchableGrid","getValue","updatePatch","getValue"]
[[[[5]]],[0,0],[0,0,0,0,4],[0,0]]
Output: [null,5,null,4]
Explanation: A 1×1 grid is one cell — patching it is a plain assignment.
```

### Constraints

- There are at most `500` operations in total across `updatePatch` and
  `getValue`.
- `1 <= rows, cols <= 100`
- `rows == rectangle.length`, `cols == rectangle[i].length`
- `0 <= row1 <= row2 < rows`
- `0 <= col1 <= col2 < cols`
- `1 <= newValue, rectangle[i][j] <= 10⁹`
- `0 <= row < rows`, `0 <= col < cols`

## Hints

### Hint 1

At 500 operations a full repaint of the patch is perfectly fine — just
loop over the rectangle.

### Hint 2

If updates vastly outnumber reads, record patches lazily and answer each
`getValue` by scanning the patches in reverse for the newest one covering
the cell.
