# Kth Largest Prefix XOR on a Grid

## Description

A grid `matrix` with `m` rows and `n` columns of non-negative integers is
given, along with an integer `k`. Score every cell `(a, b)` by the XOR
of all entries inside the rectangle that stretches from the top-left
corner down to that cell — every `matrix[i][j]` with `0 <= i <= a` and
`0 <= j <= b`. Among the `m * n` scores, one per cell, return the one
that ranks `k`-th from the top (counting duplicates, 1-indexed).

### Example 1

```text
Input: matrix = [[8,3],[4,7]], k = 2
Output: 11
Explanation: The cell (0,1) scores 8 XOR 3 = 11, second only to the
bottom-right score 8 XOR 3 XOR 4 XOR 7 = 12.
```

### Example 2

```text
Input: matrix = [[1,9],[12,5]], k = 3
Output: 1
```

### Example 3

```text
Input: matrix = [[10,6,15]], k = 2
Output: 10
```

### Constraints

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 1000`
- `0 <= matrix[i][j] <= 10⁶`
- `1 <= k <= m * n`

## Hints

### Hint 1

A running XOR along rows and columns — the same idea as a 2D prefix
sum — hands you every cell's corner-rectangle XOR in one pass.

### Hint 2

With all `m * n` scores collected, selecting the `k`-th from the top is
a standard order-statistic problem; even a full sort is quick enough.
