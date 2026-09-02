# Sizing Grid Columns

## Description

You are handed a 0-indexed `m x n` integer matrix `grid`. Measure every
column: a column's width is the number of characters its widest integer
occupies when written out.

    For instance, if grid = [[-10], [3], [12]], the single column has width 3 because -10 spans three characters.

Build an integer array `ans` of length `n` where `ans[i]` holds the width
of the `i`th column.

An integer's printed length equals its digit count, plus one more
character when a minus sign precedes the digits.

### Example 1

```text
Input: grid = [[7],[-45],[610]]
Output: [3]
Explanation: The lone column reaches width 3 — both -45 and 610 span three characters.
```

### Example 2

```text
Input: grid = [[-8,400,12],[95,-7,345]]
Output: [2,3,3]
Explanation:
Column 0's widest values, -8 and 95, each take 2 characters.
Column 1 peaks at 400, which is 3 characters long.
Column 2 peaks at 345, also 3 characters long.
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 100`
- `-10⁹ <= grid[r][c] <= 10⁹`

## Hints

### Hint 1

A value's digit count falls out of repeated integer division by 10 until
the value hits zero; a negative value earns one extra character for its
sign.

### Hint 2

Sweep the matrix and keep a running widest-so-far for every column.
