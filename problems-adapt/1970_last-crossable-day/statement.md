# Last Crossable Day

## Description

A grid with `row` rows and `col` columns begins fully open. One cell is
blocked off each day: on day `i`, for `i` from `1` to `row * col`, the cell
whose 1-based coordinates are `cells[i - 1]` becomes impassable. The list
`cells` names each cell of the grid exactly once.

A **crossing** is a path over open cells, stepping only up, down, left, or
right, that begins in the top row and finishes in the bottom row.

Return the last day on which a crossing still exists.

### Example 1

```text
Input: row = 2, col = 3, cells = [[1,2],[2,2],[1,1],[2,3],[1,3],[2,1]]
Output: 3
Explanation: After three days the blocked cells are the middle column plus
the top-left corner. The right column stays open, so the path (1,3) -> (2,3)
still works. Day 4 blocks (2,3) too, and the only top-row cell left, (1,3),
is then boxed in.
```

### Example 2

```text
Input: row = 3, col = 2, cells = [[1,1],[2,1],[3,2],[1,2],[2,2],[3,1]]
Output: 2
Explanation: Two days of blocking leave the left column blocked at the top
but open at the bottom; the right column carries the crossing
(1,2) -> (2,2) -> (3,2). Day 3 blocks (3,2), and no detour exists.
```

### Example 3

```text
Input: row = 3, col = 3, cells = [[2,2],[1,1],[3,3],[1,2],[3,1],[2,3],[1,3],[3,2],[2,1]]
Output: 2
Explanation: With the center and the top-left corner blocked, a crossing
survives along the right edge. Day 3 blocks (3,3) and, since (2,2) is
already blocked, every route into the bottom row is cut.
```

### Constraints

- `2 <= row, col <= 2 * 10⁴`
- `4 <= row * col <= 2 * 10⁴`
- `cells.length == row * col`
- `1 <= cells[i][0] <= row` and `1 <= cells[i][1] <= col`
- every cell of the grid appears in `cells` exactly once

## Hints

### Hint 1

Testing one particular day is plain reachability: flood-fill the open cells
from the whole top row and see whether the bottom row is touched.

### Hint 2

Blocked cells never reopen, so the set of crossable days is an initial
stretch of days — once the crossing dies it stays dead. That shape invites
a search over the day number.

### Hint 3

Reading the days backwards is the mirror image: cells reappear one at a
time, and a disjoint-set union can merge each returning cell with its
returning neighbors until top meets bottom.
