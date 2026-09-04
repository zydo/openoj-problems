# Densest Row of Ones

## Description

You receive a binary matrix `mat` with `m` rows and `n` columns, indexed
from zero. Locate the row that holds the greatest number of `1`s, and
report how many `1`s it holds.

If several rows tie for the largest count of `1`s, the one with the
smallest index wins.

Answer as a two-element array: the winning row's index followed by its
count of `1`s.

### Example 1

```text
Input: mat = [[1,0],[0,1]]
Output: [0,1]
Explanation: Both rows contain exactly one 1, so the lower index 0 is
returned together with the count 1.
```

### Example 2

```text
Input: mat = [[0,1,1],[1,1,1],[0,0,1]]
Output: [1,3]
Explanation: Row 1 is filled with ones — a count of 3, the matrix maximum —
so the answer is [1,3].
```

### Example 3

```text
Input: mat = [[0,0],[0,0],[0,0]]
Output: [0,0]
Explanation: No row contains any 1, so every row ties at zero and row 0
wins with the count 0.
```

### Constraints

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 100`
- `mat[i][j]` is 0 or 1.

## Hints

### Hint 1

Walk the rows one at a time and tally the ones in each.
