# The Richest Coin-Grid Haul

## Description

You are given an `m x n` grid of coin values. A robot starts at the
top-left cell `(0, 0)` and walks to the bottom-right cell `(m - 1, n - 1)`,
moving only right or down.

Each cell `coins[i][j]` affects the haul:

- If `coins[i][j] >= 0`, the robot picks the coins up and adds the value
  to its total.
- If `coins[i][j] < 0`, the cell holds a robber: passing through costs
  the robot the absolute value of that cell.

The robot carries two defuser charges. Each charge may be spent on one
robber cell along the route — a defused robber steals nothing, so the
cell contributes 0.

The total can end up negative. Return the largest haul the robot can
finish the walk with.

### Example 1

```text
Input: coins = [[1,-2,3],[2,-3,5],[4,-1,1]]
Output: 10
Explanation: Go right, right, down, down and spend one charge on the -2
cell: 1 + 0 + 3 + 5 + 1 = 10. No route collects more.
```

### Example 2

```text
Input: coins = [[-5,-5],[-5,-5]]
Output: -5
Explanation: Every route crosses three robber cells but only two charges
exist, so one robbery costing 5 is unavoidable and the best finish is -5.
```

### Example 3

```text
Input: coins = [[3],[-1],[4]]
Output: 7
Explanation: The single-column route is forced. Defusing the -1 cell
gives 3 + 0 + 4 = 7.
```

### Constraints

- `m == coins.length`
- `n == coins[i].length`
- `1 <= m, n <= 500`
- `-1000 <= coins[i][j] <= 1000`

## Hints

### Hint 1

Add a third dimension to the grid DP: the number of charges already
spent upon arriving at each cell.

### Hint 2

From each neighbor layer a cell is entered two ways — take the cell's
value as-is, or, on a robber cell, spend a charge and take 0 instead.
The start cell can absorb a charge too, and the answer is the best layer
at the goal.
