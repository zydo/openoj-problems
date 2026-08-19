# Count Grid Routes With a Given Xor

## Description

You are given an `m x n` grid of integers `grid` and an integer `k`.

A route begins in the top-left cell `(0, 0)`, ends in the bottom-right cell
`(m - 1, n - 1)`, and at every step moves to the neighbouring cell on its
right or the one below it. The value of a route is the xor of every number
along it, both endpoints included.

Count the routes whose value equals `k`. The count can be large, so return it
modulo `10⁹ + 7`.

### Example 1

```text
Input: grid = [[2,6,6],[5,5,1],[3,7,1]], k = 2
Output: 3
Explanation: The three routes are:
(0, 0) → (1, 0) → (2, 0) → (2, 1) → (2, 2)   with values 2 ^ 5 ^ 3 ^ 7 ^ 1
(0, 0) → (1, 0) → (1, 1) → (1, 2) → (2, 2)   with values 2 ^ 5 ^ 5 ^ 1 ^ 1
(0, 0) → (0, 1) → (0, 2) → (1, 2) → (2, 2)   with values 2 ^ 6 ^ 6 ^ 1 ^ 1
Each expression evaluates to 2.
```

### Example 2

```text
Input: grid = [[4,1,5,1],[5,5,2,4],[0,6,7,1]], k = 4
Output: 4
Explanation: Four routes end with a value of 4. Two of them share their value
sequence — 4 ^ 1 ^ 5 ^ 2 ^ 7 ^ 1 — while visiting different cells:
(0, 0) → (0, 1) → (1, 1) → (1, 2) → (2, 2) → (2, 3) and
(0, 0) → (0, 1) → (0, 2) → (1, 2) → (2, 2) → (2, 3).
Routes are counted by the cells they visit, not by their value sequences.
```

### Example 3

```text
Input: grid = [[5,2,7],[6,0,1],[5,5,5]], k = 15
Output: 0
Explanation: No route reaches a value of 15.
```

### Constraints

- `1 <= m, n <= 300`, where `grid` is an `m x n` grid
- `0 <= grid[r][c] < 16`
- `0 <= k < 16`

## Hints

### Hint 1

Ask what a half-finished route leaves behind that the rest of the walk can
still see: where its head is, and the xor accumulated so far. Nothing else
about it matters.

### Hint 2

Let `dp[i][j][x]` count routes whose head sits on cell `(i, j)` holding a
running xor of `x`. A route enters that state from the cell above or the cell
to the left.

### Hint 3

Fill the table row by row and read the answer off the far corner at `x = k`,
taking the modulus as you go.
