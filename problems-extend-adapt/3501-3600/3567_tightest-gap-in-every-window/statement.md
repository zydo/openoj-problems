# Tightest Gap In Every Window

## Description

You are given an `m x n` integer matrix `grid` and an integer `k`.

Slide a `k x k` window over `grid` — every placement whose top-left
corner `(i, j)` satisfies `0 <= i <= m - k` and `0 <= j <= n - k`. For
each placement, look at the `k * k` values it covers and measure the
smallest `|a - b|` over all pairs of cells holding different values.

Return an `(m - k + 1) x (n - k + 1)` array `answer`, where
`answer[i][j]` holds that measurement for the window based at `(i, j)`.

Note: when every value inside a window is identical there is no pair of
distinct values, and the measurement for that window is 0.

### Example 1

```text
Input: grid = [[5,20],[30,7]], k = 2
Output: [[2]]
Explanation: The lone window covers the values 5, 7, 20, and 30. The
closest distinct pair is 5 and 7, whose difference is 2.
```

### Example 2

```text
Input: grid = [[4,9,1]], k = 1
Output: [[0,0,0]]
Explanation: Every 1 x 1 window holds a single value, so no distinct
pair exists anywhere and all three measurements are 0.
```

### Example 3

```text
Input: grid = [[10,0,4],[6,12,8]], k = 2
Output: [[2,4]]
Explanation: The window based at (0, 0) covers 10, 0, 6, 12 — its closest
distinct pair is 10 and 12, a gap of 2. The window based at (0, 1) covers
0, 4, 12, 8, and the closest pair there is 8 and 12, a gap of 4.
```

### Constraints

- `1 <= m == grid.length <= 30`
- `1 <= n == grid[i].length <= 30`
- `-10⁵ <= grid[i][j] <= 10⁵`
- `1 <= k <= min(m, n)`

## Hints

### Hint 1

Every window can be examined directly — the dimensions cap the work at a
small multiple of the cell count.

### Hint 2

Sorting one window's values lines up the closest distinct pair as
neighbors, so the answer for that window is the smallest difference
between adjacent entries of its sorted list.
