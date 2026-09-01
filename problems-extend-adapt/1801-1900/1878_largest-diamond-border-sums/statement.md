# Largest Diamond Border Sums

## Description

You are given an `m x n` integer matrix `grid`.

A diamond is a square rotated 45 degrees whose four corners each sit at
the center of a grid cell. Its border sum is the total of the values on
the cells its outline passes through. The smallest possible diamond
covers a single cell — its border is that one cell, and its border sum
is just that cell's value.

![diagram](figures/1878-1.svg)

Collect every border sum achievable by any diamond anywhere in `grid`
and return the three largest distinct ones in descending order; if fewer
than three distinct sums exist, return all of them.

### Example 1

![diagram](figures/1878-2.svg)

```text
Input: grid = [[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],
               [1,5,5,4,1],[4,3,2,2,5]]
Output: [228,216,211]
Explanation: The largest distinct border sums belong to the outlines
drawn around the center of the grid:
- Blue: 20 + 3 + 200 + 5 = 228
- Red: 200 + 2 + 10 + 4 = 216
- Green: 5 + 200 + 4 + 2 = 211
```

### Example 2

![diagram](figures/1878-3.svg)

```text
Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
Output: [20,9,8]
Explanation: The three largest distinct border sums are:
- Blue: 4 + 2 + 6 + 8 = 20 (border of the large diamond)
- Red: 9 (a single-cell diamond in the bottom right corner)
- Green: 8 (a single-cell diamond in the bottom middle)
```

### Example 3

```text
Input: grid = [[7,7,7]]
Output: [7]
Explanation: Every diamond in this grid has border sum 7, so only one
distinct value exists and the answer is [7].
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 50`
- `1 <= grid[i][j] <= 10⁵`

### Hint 1

Only the three largest distinct sums need to survive — a small set of
best-so-far values is enough while scanning.

### Hint 2

The grid is tiny: for every possible center and every possible size,
walk the outline once and total it up.
