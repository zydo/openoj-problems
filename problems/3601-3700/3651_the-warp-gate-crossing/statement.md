# The Warp-Gate Crossing

## Description

An `m x n` integer matrix `grid` and an integer `k` are given. You start on
the top-left cell `(0, 0)` and are trying to reach the bottom-right cell
`(m - 1, n - 1)`.

Standing on any cell, two kinds of moves are open to you:

- An **ordinary step** moves one cell to the right, `(i, j + 1)`, or one
  cell down, `(i + 1, j)`, and costs the value of the cell you land on.
- A **warp** jumps from your current cell `(i, j)` to any cell `(x, y)`
  whose value satisfies `grid[x][y] <= grid[i][j]`, and costs nothing. At
  most `k` warps may be used in total.

Return the least total cost of a trip from `(0, 0)` to `(m - 1, n - 1)`.

### Example 1

```text
Input: grid = [[4,6],[2,7]], k = 1
Output: 7
Explanation: Warp from the start onto the cell below it — the value 2
satisfies 2 <= 4 — at no cost, then take one right move that pays 7.
```

### Example 2

```text
Input: grid = [[5,1,9],[3,8,2],[6,4,7]], k = 0
Output: 18
Explanation: With no warps every stepped-on cell is paid for. The cheapest
walk goes right, down, right, down for 1 + 8 + 2 + 7 = 18.
```

### Example 3

```text
Input: grid = [[3,1,4],[1,5,9],[2,6,5]], k = 1
Output: 6
Explanation: Step right for 1 and down for 5 to stand on the cell holding
5, then warp straight onto the bottom-right corner — 5 <= 5 — for free.
The trip costs 6.
```

### Example 4

```text
Input: grid = [[3,1,4],[1,5,9],[2,6,5]], k = 2
Output: 5
Explanation: Warp from the start onto the middle-left cell (its 1
satisfies 1 <= 3), walk right for 5, then warp from that 5 onto the corner
(5 <= 5). A second warp saves one more than a single warp could.
```

### Constraints

- `2 <= m, n <= 80`
- `m == grid.length`
- `n == grid[i].length`
- `0 <= grid[i][j] <= 10⁴`
- `0 <= k <= 10`

## Hints

### Hint 1

Dynamic programming settles this cleanly.

### Hint 2

Structure the work around the number of warps used. For each allowance
level, work out the cheapest way to stand on every cell — either through an
ordinary step or through a warp launched from the previous level's costs.
