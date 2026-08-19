# Fewest Moves on a 2x3 Tile Grid

## Description

A `2 x 3` grid contains tiles `1` through `5` and one blank cell represented
by `0`. In one move, swap the blank with a horizontally or vertically
adjacent tile.

The target layout, read row by row, is `123450`. Return the minimum moves
needed to reach it from `grid`, or `-1` if the target is unreachable.

### Example 1

```text
Input: grid = [[1,5,2],[0,4,3]]
Output: 4
```

### Example 2

```text
Input: grid = [[4,0,2],[5,1,3]]
Output: 6
```

### Example 3

```text
Input: grid = [[0,1,3],[2,4,5]]
Output: -1
Explanation: This layout has the opposite reachability parity from the
target, so no sequence of legal blank moves can solve it.
```

### Constraints

- `grid.length == 2`
- `grid[i].length == 3`
- `0 <= grid[i][j] <= 5`
- All six grid values are distinct.

## Hints

### Hint 1

Treat each complete layout as a graph node and each legal blank swap as an
unweighted edge.

### Hint 2

Encode the six cells as a tuple or short string for queueing and visited-state
tracking.

### Hint 3

Breadth-first search examines at most `6! = 720` layouts and therefore yields
the minimum move count directly.
