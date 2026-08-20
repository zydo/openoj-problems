# Grid Neighborhood Sums

## Description

You are given an `m x n` grid of positive integers `grid` and a radius `k`.
Build a second `m x n` grid of the same shape in which the entry at row `i`,
column `j` is the total of every cell of `grid` lying at most `k` rows away
and at most `k` columns away from `(i, j)`.

A neighborhood that would run off an edge simply stops there: positions
outside the grid do not exist, so only the cells that are actually present
are added.

### Example 1

```text
Input: grid = [[12,3,7],[5,20,1],[9,4,15]], k = 1
Output: [[40,48,31],[53,76,50],[38,54,40]]
Explanation: The corner cell (0, 0) has only three neighbors inside the grid,
so its entry is 12 + 3 + 5 + 20. The center cell (1, 1) reaches the whole
grid, giving 76.
```

### Example 2

```text
Input: grid = [[2,6,1,4],[8,3,5,7]], k = 2
Output: [[25,36,36,26],[25,36,36,26]]
Explanation: With only two rows, every neighborhood spans both of them. The
columns are likewise within reach of every cell except at the far ends: the
leftmost cells miss the final column (36 - 11) and the rightmost cells miss
the first (36 - 10).
```

### Example 3

```text
Input: grid = [[7,2],[1,9],[6,4],[3,8]], k = 1
Output: [[19,19],[29,29],[31,31],[21,21]]
Explanation: Both columns of a row are always within one column of each
other, so the two entries of a row agree; only the row extent changes.
```

### Constraints

- `grid` has `m` rows, each of length `n`
- `1 <= m, n, k <= 100`
- `1 <= grid[i][j] <= 100`

## Hints

### Hint 1

Adding up a full neighborhood for every cell reads the same entries over and
over. What figures could you compute once, before answering any query?

### Hint 2

Neighborhoods are squares cut off at the borders — in other words, axis-
aligned rectangles. If any rectangle's total were available in constant
time, how would you get each neighborhood?

### Hint 3

Tabulate, for every position, the total of the rectangle that stretches
from the top-left corner of the grid down to that position. Each such entry
follows from three earlier ones, and four of them yield any rectangle by
inclusion-exclusion.
