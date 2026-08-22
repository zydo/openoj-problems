# Shortest Grid Crossing

## Description

You are given an `n x n` grid where each cell is marked open (`0`) or
blocked (`1`).

A crossing is a walk that starts on the top-left cell, ends on the
bottom-right cell, and moves between open cells only. Each move goes to a
different cell touching the current one — sharing an edge or just a corner
both qualify. The length of a crossing is the number of cells it visits,
counting the starting cell.

Return the length of the shortest crossing, or `-1` if the bottom-right
cell is unreachable. A crossing cannot begin or end on a blocked cell.

### Example 1

```text
Input: grid = [[0,1],[0,0]]
Output: 2
Explanation: The start and the finish touch at a corner, and corner moves
are legal, so the crossing is exactly those two cells.
```

![A 2 x 2 grid where a blue diagonal step runs from the top-left open cell
straight to the bottom-right open cell.](figures/example-1.svg)

### Example 2

```text
Input: grid = [[0,0,0],[0,1,0],[1,1,0]]
Output: 4
Explanation: Step right along the top row, cut diagonally to the right
column, then step down to the corner: cells (0,0), (0,1), (1,2), (2,2).
```

![A 3 x 3 grid with a blue path of 4 cells: right along the top, then
diagonally, then down through the open cells.](figures/example-2.svg)

### Example 3

```text
Input: grid = [[0,1,1],[1,1,0],[0,0,0]]
Output: -1
Explanation: Every cell touching the start is blocked, so no crossing can
leave it even though the lower rows are open.
```

### Constraints

- `n == grid.length`
- `n == grid[i].length`
- `1 <= n <= 100`
- `grid[i][j]` is `0` or `1`.

## Hints

### Hint 1

Every move costs one step, no matter its direction, which makes the open
cells an unweighted graph. Which search order reaches distant cells in
increasing order of distance?

### Hint 2

From each cell, try all eight touching neighbours, keeping the ones inside
the grid that are open and not yet walked through.

### Hint 3

Mark cells as you give them a distance, so each is handled once. The first
distance assigned to the bottom-right cell is then guaranteed minimal.
