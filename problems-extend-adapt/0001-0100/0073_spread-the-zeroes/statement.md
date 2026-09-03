# Spread The Zeroes

## Description

Work on an `m x n` grid of integers. Every `0` in the grid is
contagious: the full row and the full column through it must end up all
zeros.

Do the rewrite in place — overwrite the grid you were handed rather
than building a new one — and return it; the judge compares the
returned grid, so what comes back must be the zero-spread grid.

### Example 1

![diagram](figures/73-1.svg)

```text
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```

The lone zero in the middle takes out its own row and column.

### Example 2

![diagram](figures/73-2.svg)

```text
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```

Two zeros sit in the top row, and together they claim every row's first
and last entries.

### Example 3

```text
Input: matrix = [[5,6],[0,8],[9,0]]
Output: [[0,0],[0,0],[0,0]]
```

Here the two zeros between them cover both columns and all three rows,
so nothing survives.

### Constraints

- `m == matrix.length`
- `n == matrix[0].length`
- `1 <= m, n <= 200`
- `-2³¹ <= matrix[i][j] <= 2³¹ - 1`

### Follow-up

An `O(m + n)` record of which rows and columns to wipe is easy. Could
you get the spread done with constant extra space?

## Hints

### Hint 1

A first draft may simply scan for zeros and remember their rows and
columns in side collections before wiping.

### Hint 2

Writing zeros during the scan is dangerous — a zero you just wrote can
be mistaken for an original one. Some placeholder value could fence off
what you have already processed.

### Hint 3

The grid can carry its own markers: let the leading cell of each row and
each column remember that the row or column is due for a wipe, and keep
the markers' own fate in two flags decided before any marker is written.
