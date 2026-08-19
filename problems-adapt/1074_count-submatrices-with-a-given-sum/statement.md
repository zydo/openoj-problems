# Count Submatrices With a Given Sum

## Description

You are given an integer matrix `matrix` and an integer `target`.

A submatrix is any rectangular block of cells obtained by choosing a
contiguous run of rows together with a contiguous run of columns. Its sum
is the total of all cells inside the block. Two submatrices count as
different whenever their chosen row run or column run differs, even if
they end up covering the same cells.

Return how many submatrices sum to exactly `target`.

### Example 1

```text
Input: matrix = [[0,2,0],[2,2,2],[0,2,0]], target = 0
Output: 4
Explanation: The four corner cells, each a 1x1 block, sum to 0. Every
wider block necessarily includes a 2, so nothing larger qualifies.
```

![A 3 x 3 grid holding 0s in the corners and 2s elsewhere, with the four
corner cells outlined in blue.](figures/example-1.svg)

### Example 2

```text
Input: matrix = [[1,-3],[-3,1]], target = -2
Output: 4
Explanation: Each full row sums to -2 and each full column does too, which
is four submatrices. The 2x2 block totals -4, and no single cell equals
-2.
```

### Example 3

```text
Input: matrix = [[-904]], target = 0
Output: 0
```

### Constraints

- `1 <= matrix.length <= 100`
- `1 <= matrix[0].length <= 100`
- `-1000 <= matrix[i][j] <= 1000`
- `-10^8 <= target <= 10^8`

## Hints

### Hint 1

A two-dimensional prefix-sum table answers "what does this rectangle
total?" in constant time, so no rectangle ever needs its cells re-added.

### Hint 2

Fix the top and bottom rows. Summing the strip between them column by
column leaves a one-dimensional array, and each rectangle spanning exactly
those rows is a contiguous stretch of that array.

### Hint 3

Count stretches with a given total by sweeping left to right with a hash
map of earlier prefix totals, seeded with one zero: a stretch ending here
works out precisely when `prefix - target` was seen before.
