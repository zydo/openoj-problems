# Latest Safe Departure

## Description

You are given an `m x n` grid describing a field on fire. Each cell holds one
of three values:

- `0` — open ground,
- `1` — fire,
- `2` — rock, which neither you nor the fire can enter.

You stand on the top-left cell `(0, 0)` and want to reach the exit at the
bottom-right cell `(m - 1, n - 1)`. Time advances in minutes. In each minute
you may first step to an adjacent open cell (north, east, south, or west), and
after your step every fire cell ignites all of its adjacent cells that are not
rock. You may also hold still during the opening minutes before setting out.

Return the largest number of minutes you can wait on the starting cell and
still make it to the exit. If the exit cannot be reached even when leaving
immediately, return `-1`. If no amount of waiting ever endangers the trip,
return `10⁹`.

Reaching the exit in the very same minute the fire does still counts as a safe
arrival.

### Example 1

```text
Input: grid = [[0,0,0,0,0],[0,2,0,0,0],[0,1,2,0,0]]
Output: 2
Explanation: The fire burns at (2,1), hemmed in by rock above and to its
right, so its only way out is left along the bottom row and then up the left
column: it claims (2,0) in minute 1, (1,0) in minute 2 and (0,0) in minute 3.
Holding still for 2 minutes and then walking the top row and down the right
side keeps you clear of it; waiting 3 minutes pins you on a cell the flames
reach in minute 3.
```

### Example 2

```text
Input: grid = [[0,0,0,0],[1,1,0,0],[0,0,0,0]]
Output: -1
Explanation: Two fire cells sweep across the middle row. Every route to the
exit passes through a cell they claim no later than you can, so the exit is
unreachable even if you set out at once.
```

### Example 3

```text
Input: grid = [[0,0,0,0,0],[0,2,2,2,0],[0,2,1,2,0],[0,2,2,2,0]]
Output: 1000000000
Explanation: A ring of rock fully encloses the fire, so it never spreads at
all. The corridor around the ring is permanently safe, and any wait is
survivable.
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `2 <= m, n <= 300`
- `4 <= m * n <= 2 * 10⁴`
- `grid[i][j]` is `0`, `1`, or `2`.
- `grid[0][0] == grid[m - 1][n - 1] == 0`

## Hints

### Hint 1

Where the flames will be, and when, does not depend on where you walk. Can you
compute, for every cell, the earliest minute fire could occupy it?

### Hint 2

A multi-source breadth-first search from all burning cells gives exactly that
arrival schedule, in one pass.

### Hint 3

Given a fixed waiting time, the arrival schedule turns a safety check into an
ordinary shortest-path walk where each cell has a deadline.

### Hint 4

Whether a given wait survives the walk moves in only one direction as the wait
grows — which turns the search for the latest safe wait into a binary search.
