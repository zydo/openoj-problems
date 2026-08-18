# Round-Trip Cherry Harvest

## Description

An `n x n` grid describes an orchard. Every cell is one of:

- `0` — bare ground, free to cross,
- `1` — a cherry, which may be picked and then crossed,
- `-1` — a thorn bush, which may never be entered.

You stand at the top-left corner `(0, 0)`. Collect as many cherries as possible
on a round trip that obeys these rules:

- First reach the bottom-right corner `(n - 1, n - 1)`, stepping only **right**
  or **down**.
- Then return to `(0, 0)`, stepping only **left** or **up**.
- Every step lands on a cell that is not a thorn bush.
- A picked cherry leaves bare ground behind: no cell pays out twice.

Return the largest number of cherries one round trip can gather. When no legal
walk joins the two corners, return `0`.

### Example 1

```text
Input: grid = [[1,0,0],[0,1,0],[1,1,0]]
Output: 4
Explanation: Down, down, right, right gathers the cherries at (0,0), (2,0) and (2,1). The walk back — left, up, up, left — gathers the one remaining cherry at (1,1). No round trip gathers more than these four.
```

### Example 2

```text
Input: grid = [[1,-1,0],[-1,1,0],[1,1,0]]
Output: 0
Explanation: Each of the two cells one step from the start holds a thorn bush, so the walk cannot leave the corner and nothing is collected.
```

### Example 3

```text
Input: grid = [[1]]
Output: 1
Explanation: Start and destination are the same cell, so its single cherry is gathered exactly once.
```

### Constraints

- `1 <= n <= 50`, where `n == grid.length == grid[i].length`
- `grid[i][j]` is `-1`, `0`, or `1`
- Neither `grid[0][0]` nor `grid[n-1][n-1]` is a thorn bush

## Hints

### Hint 1

Read the return leg backwards. Reversed, it is also a right-and-down walk from
corner to corner — so the whole round trip behaves like two pickers leaving
`(0, 0)` at the same moment, and a cherry either of them reaches is banked
exactly once.

### Hint 2

March the two pickers in lockstep. After `t` steps the first sits at
`(r1, t - r1)` and the second at `(r2, t - r2)`, so `t` layers the
computation and only positions reachable at the same moment ever meet. They
can share a cherry only where `r1 == r2`.

### Hint 3

Let `dp[t][r1][r2]` hold the best joint haul so far. Each layer steps from the
previous one through four predecessor pairs — each picker arrived from above
or from the left. Mark thorn-hit and out-of-range states with a negative
sentinel; impossibility then spreads on its own, and the corner state at the
end is the answer, or `0` when it stayed unreachable.
