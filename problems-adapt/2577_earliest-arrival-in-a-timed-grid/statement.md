# Earliest Arrival in a Timed Grid

## Description

You are given an `m x n` grid of non-negative integers. Each cell `(row, col)`
carries a threshold `grid[row][col]`: you may step onto the cell only at a
time greater than or equal to its threshold.

You stand on the top-left cell at time `0`, and each step — up, down, left or
right to an adjacent cell — advances the clock by exactly `1`. You cannot
stand still, but you may step back onto cells you have already visited.

Return the earliest time at which you can step onto the bottom-right cell, or
`-1` if that can never happen.

### Example 1

```text
Input: grid = [[0,2,2],[1,3,0]]
Output: 5
Explanation: Step down at t = 1 (threshold 1). A straight continuation
would reach the middle cell at t = 2, but it opens at t = 3 — so buy two
seconds: back up at t = 2, down again at t = 3, right into the middle cell at
t = 4 and the goal at t = 5.
```

### Example 2

```text
Input: grid = [[0,3],[2,0]]
Output: -1
Explanation: Both neighbours of the start open at t >= 2 and t >= 3, but the
first step happens at t = 1. With no cell to bounce on, the start can never
be left.
```

### Example 3

```text
Input: grid = [[0,1,5],[2,8,1],[3,4,0]]
Output: 6
Explanation: The left column opens too late for a direct descent — at t = 1
only the right neighbour (threshold 1) is enterable — so step right at t = 1,
back onto the start at t = 2, and from there down the column: (1,0) at
t = 3, (2,0) at t = 4, (2,1) at t = 5, and the goal at t = 6.
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `2 <= m, n <= 1000`
- `4 <= m * n <= 10⁵`
- `0 <= grid[i][j] <= 10⁵`
- `grid[0][0] == 0`

## Hints

### Hint 1

Every walk from the start to a cell has a fixed arrival parity, since each
step costs one second. Waiting is only possible in units of two seconds —
bounce across an edge and return.

### Hint 2

From a cell reached at time `t`, the earliest possible entry into a neighbour
with threshold `g` is the smallest time `>= max(t + 1, g)` whose parity
matches `t + 1`.

### Hint 3

That rule gives non-decreasing arrival times along any route, which is
exactly the property Dijkstra needs: relax neighbours by the parity-adjusted
formula with a priority queue.

### Hint 4

The only global dead end is at the start: if both of its neighbours open
after t = 1, no first step exists and the answer is `-1`.
