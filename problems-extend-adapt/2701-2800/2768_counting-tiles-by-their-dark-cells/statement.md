# Counting Tiles By Their Dark Cells

## Description

Integers `m` and `n` give the shape of a 0-indexed `m x n` grid. A list
`coordinates` names the cells painted dark: `coordinates[i] = [x, y]`
darkens the cell at `[x, y]`, and every cell not listed stays light.

Call a tile any `2 x 2` square of the grid. Formally, the tile whose
top-left corner is `[x, y]`, where `0 <= x < m - 1` and
`0 <= y < n - 1`, covers the cells `[x, y]`, `[x + 1, y]`, `[x, y + 1]`,
and `[x + 1, y + 1]`.

Build a 0-indexed array `arr` of length `5` in which `arr[i]` counts the
tiles holding exactly `i` dark cells.

### Example 1

![diagram](figures/2768-1.svg)

```text
Input: m = 3, n = 3, coordinates = [[0,0]]
Output: [3,1,0,0,0]
Explanation: The lone dark cell falls inside exactly one tile — the one
whose top-left corner is [0,0] — so that tile counts 1. The grid's other
three tiles, anchored at [0,1], [1,0] and [1,1], hold none. The answer
is [3,1,0,0,0].
```

### Example 2

![diagram](figures/2768-2.svg)

```text
Input: m = 3, n = 3, coordinates = [[0,0],[1,1],[0,2]]
Output: [0,2,2,0,0]
Explanation: Two tiles pick up two dark cells each — the ones anchored
at [0,0] and [0,1]. The remaining two tiles, anchored at [1,0] and
[1,1], pick up one apiece. The answer is [0,2,2,0,0].
```

### Constraints

- `2 <= m <= 10⁵`
- `2 <= n <= 10⁵`
- `0 <= coordinates.length <= 10⁴`
- `coordinates[i].length == 2`
- `0 <= coordinates[i][0] < m`
- `0 <= coordinates[i][1] < n`
- No two entries of `coordinates` are the same cell.

## Hints

### Hint 1

The grid is far too large to visit every tile, but the dark cells are
few — and a tile only matters once a dark cell lands inside it.

### Hint 2

A dark cell at `(x, y)` belongs only to the tiles anchored at
`(x - 1, y - 1)`, `(x - 1, y)`, `(x, y - 1)` or `(x, y)` — each of them
in range.

### Hint 3

Sweep the coordinates, bumping a counter for each in-range anchor
corner around the current cell; a map keyed by the corner holds these
counts.

### Hint 4

The map's entries are exactly the tiles with at least one dark cell, so
the zero-dark bucket is just the total tile count minus the map's size.
