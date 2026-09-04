# The Richest Budgeted Walk

## Description

You are given an `m x n` grid in which every cell holds a `0`, a `1` or
a `2`, together with an integer budget `k`.

A path starts on the top-left cell `(0, 0)` and finishes on the
bottom-right cell `(m - 1, n - 1)`, and each step moves one cell to the
right or one cell down.

Stepping onto a cell both earns score and spends budget, according to
the value written in it:

- a `0` earns nothing and spends nothing;
- a `1` earns `1` and spends `1`;
- a `2` earns `2` and spends `1`.

Return the greatest total score a path can earn while its total spending
stays within `k`. If every route to the bottom-right corner overspends,
return `-1` — reaching the corner counts for nothing on its own.

### Example 1

```text
Input: grid = [[0,2,2],[2,0,2],[2,2,0]], k = 3
Output: 6
Explanation: The path right, right, down, down collects the three 2s
along the top and right edges: 2 + 2 + 2 = 6 for exactly three spend.
Any detour hoping for more would need a fourth charged cell.
```

### Example 2

```text
Input: grid = [[0,2,0],[0,2,0],[2,0,1]], k = 2
Output: 3
Explanation: Riding the top and right edges earns 2 + 0 + 0 + 1 = 3 at
two spend, and the left and bottom edges do just as well. Slicing
through the middle column would gather three 2s but costs 4 in total.
```

### Example 3

```text
Input: grid = [[0,1],[2,2]], k = 1
Output: -1
Explanation: Whichever way the path turns, it lands on two charged
cells before the corner, so the cheapest route already spends 2 and the
budget of 1 is unreachable.
```

### Constraints

- `1 <= m, n <= 200`
- `0 <= k <= 10³`
- `grid[0][0] == 0`
- `0 <= grid[i][j] <= 2`

## Hints

### Hint 1

Treat this as dynamic programming over three axes: the two coordinates
plus the money already spent.

### Hint 2

Let `dp[i][j][c]` be the best score of any path ending at cell `(i, j)`
whose total spending is exactly `c`, with `0 <= c <= k`.

### Hint 3

A path reaches `(i, j)` from `(i - 1, j)` or from `(i, j - 1)`; stepping
onto `(i, j)` adds its value to the score, and adds `1` to the spending
unless that value is `0`.

### Hint 4

The answer is the largest `dp[m - 1][n - 1][c]` over `c = 0..k`, or `-1`
when every entry is still unreachable.
