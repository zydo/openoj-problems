# Mirror Maze Routes

## Description

An `m x n` grid of zeros and ones is a small mirror maze: a cell holding
`0` is open floor and a cell holding `1` is a mirror. A robot is placed on
the top-left cell `(0, 0)` and wants to reach the bottom-right cell
`(m - 1, n - 1)`, walking only one cell rightward or one cell downward at
a time.

Mirrors never let the robot inside. The moment a step would enter a mirror
cell, the mirror swings that step aside and the robot is placed beyond the
mirror instead:

- a rightward step into a mirror is turned downward, placing the robot one
  row below the mirror;
- a downward step into a mirror is turned rightward, placing the robot one
  column to the right of the mirror.

That new spot may itself be a mirror, and the rule applies again — the
direction the robot was traveling when it reached that mirror decides
which way the step swings — until the robot settles on open floor, or a
swung step would carry it off the grid. Any route whose bounces push it
out of the grid is thrown away entirely.

Count the distinct routes that get the robot from `(0, 0)` to
`(m - 1, n - 1)`, modulo `10⁹ + 7`.

### Example 1

```text
Input: grid = [[0,0],[1,0]]
Output: 2
Explanation: The plain right-then-down walk works. Walking down first
touches the mirror at (1, 0), which swings the move rightward and drops
the robot on (1, 1) — that route finishes too.
```

### Example 2

```text
Input: grid = [[0,1,0],[0,1,0],[0,0,0]]
Output: 3
Explanation: Opening rightward bounces off (0, 1), then off (1, 1), and
settles on (1, 2), which walks to the goal. Opening downward offers two
clean walks through (1, 0), and both reach the goal.
```

### Example 3

```text
Input: grid = [[0,1,1],[1,0,0],[1,0,0]]
Output: 4
Explanation: Either opening move is deflected onto (1, 1) — the rightward
one by the mirror at (0, 1), the downward one by the mirror at (1, 0) —
and from there two walks reach the goal, giving 2 + 2 = 4.
```

### Constraints

- `2 <= m, n <= 500`
- `m == grid.length`
- `n == grid[i].length`
- `grid[i][j]` is either `0` or `1`.
- `grid[0][0] == grid[m - 1][n - 1] == 0`

## Hints

### Hint 1

Where a bounced step finally lands depends only on the cell it left and
the direction it tried to go. Resolve each bounce chain once, up front,
and cache the true landing cell of every attempted move.

### Hint 2

Let `dp[i][j]` be the number of routes reaching `(i, j)`. Seed the start
with one route, sweep cells in row-major order, and push each nonzero
count into the two cached landing cells of its rightward and downward
attempts.

### Hint 3

Every hop of a bounce chain moves one row down or one column right, so
chains never loop — a reverse row-major pass over the mirror cells fills
the landing tables using only finished entries. Discard landings that
fall outside the grid, and reduce every sum modulo `10⁹ + 7`.
