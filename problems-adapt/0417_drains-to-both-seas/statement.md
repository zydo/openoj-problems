# Drains To Both Seas

## Description

An `m x n` grid of square cells sits between two seas: one of them touches the
grid's top and left edges, the other its bottom and right edges.
`heights[r][c]` is the elevation of the cell at row `r`, column `c`.

Water spills from a cell into a neighbouring cell to the north, south, east or
west whenever that neighbour's elevation is lower than or equal to the cell's
own. A cell lying along an edge spills straight into the sea that touches it.

List every cell from which water can reach **both** seas. Return the
coordinates `[r, c]` in row-major order — increasing row index first, then
increasing column index.

### Example 1

```text
Input: heights = [[4,3,2,5],[5,4,3,4],[6,5,4,3],[7,6,5,4]]
Output: [[0,3],[1,3],[2,0],[2,1],[2,2],[3,0],[3,1],[3,2]]
Explanation: The right column pours into the lower-right sea and, along the
top row, into the other one. The terrain steps down towards the bottom left,
so the cells of rows 2 and 3 also spill far enough west and south to reach
both seas.
```

### Example 2

```text
Input: heights = [[4,4,4],[4,1,4],[4,4,4]]
Output: [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]
Explanation: The flat rim passes water around freely, so every rim cell reaches
both seas. The sunken centre cannot climb onto the rim and stays dry — it is
the one cell missing from the answer.
```

### Example 3

```text
Input: heights = [[2,5,3]]
Output: [[0,0],[0,1],[0,2]]
Explanation: In a single-row grid the top edge and the bottom edge coincide,
so every cell borders both seas at once.
```

### Constraints

- `m == heights.length`
- `n == heights[r].length`
- `1 <= m, n <= 200`
- `0 <= heights[r][c] <= 10⁵`

## Hints

### Hint 1

Tracing the water downhill from each cell separately means one search per cell.
Turn the direction around: start at the sea and ask which cells the sea's water
could have come from.

### Hint 2

Flood inward once per sea, seeded with every cell on the edges that sea
touches, and step only onto neighbours at least as tall as the current cell —
those are the cells that could have spilled into it.

### Hint 3

A cell belongs to the answer exactly when both floods reached it.

### Hint 4

Mark a cell the moment you add it to the frontier, and each flood will touch
every cell at most once.
