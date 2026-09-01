# Saddle Points in a Grid

## Description

You are given a grid of numbers in which every entry is different from every
other. An entry is a saddle point when it is the smallest number in its own
row and, at the same time, the largest number in its own column.

Return every saddle point of the grid. The judge compares output exactly, so
the results come back sorted ascending.

### Example 1

```text
Input: matrix = [[1,2],[3,4]]
Output: [3]
Explanation: The row minima are 1 and 3; the column maxima are 3 and 4. The
value 3 is the smallest in its row and the largest in its column.
```

### Example 2

```text
Input: matrix = [[5,9,21],[11,4,6],[15,16,17]]
Output: [15]
Explanation: 15 is the smallest value of its row and the largest value of
its column, so it is the grid's only saddle point.
```

### Example 3

```text
Input: matrix = [[1,2,3],[6,5,4],[7,8,9]]
Output: [7]
Explanation: 7 is the minimum of the last row and the maximum of the first
column.
```

### Constraints

- The grid has `m` rows and `n` columns with `1 <= m, n <= 50` (every row has
  the same length).
- `1 <= matrix[i][j] <= 10^5`
- All `m * n` entries are distinct.

## Hints

### Hint 1

Compute the minimum of every row and the maximum of every column once, up
front.

### Hint 2

An entry qualifies precisely when it equals both of its own tallies — its
row's minimum and its column's maximum.
