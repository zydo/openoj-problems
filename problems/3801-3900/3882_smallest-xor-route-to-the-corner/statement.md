# Smallest XOR Route to the Corner

## Description

A grid of `m` rows and `n` columns holds one integer per cell.

A walk begins at the top-left cell `(0, 0)` and must finish at the
bottom-right cell `(m - 1, n - 1)`. Each move goes one cell right or one
cell down.

A walk's value is the bitwise XOR of every cell it touches, start and end
included. Different walks can produce very different values.

Return the smallest value any valid walk can produce.

### Example 1

```text
Input: grid = [[2,3],[1,2]]
Output: 1
Explanation:
    Two walks exist:
    right then down: 2 XOR 3 XOR 2 = 3
    down then right: 2 XOR 1 XOR 2 = 1
    The smaller value is 1.
```

### Example 2

```text
Input: grid = [[9,6,3],[5,2,7]]
Output: 9
Explanation:
    The three walks give 11, 10, and 9, so the answer is 9.
```

### Example 3

```text
Input: grid = [[5]]
Output: 5
Explanation:
    The walk is the single start-equals-end cell, and its value is 5.
```

### Constraints

- `1 <= m == grid.length <= 1000`
- `1 <= n == grid[i].length <= 1000`
- `m * n <= 1000`
- `0 <= grid[i][j] <= 1023`

## Hints

### Hint 1

Cell values fit in 10 bits, so a walk's XOR — however long the walk — is
also a number in `0..1023`.

### Hint 2

Keep, for every cell, the set of XOR values some walk ending there can
achieve; `dp[i][j][x]` simply means "XOR `x` is reachable at `(i, j)`".

### Hint 3

Process cells in row-major order: each cell inherits the XORs of its top
and left neighbours, each flipped by `x ^ grid[i][j]`. The smallest flag
set at the corner is the answer.
