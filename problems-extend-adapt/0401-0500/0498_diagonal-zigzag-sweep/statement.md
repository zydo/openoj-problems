# Diagonal Zigzag Sweep

## Description

Given an `m x n` matrix `mat`, read its cells in a zigzag along the
anti-diagonals and return the values in that order.

A cell `(r, c)` lies on the anti-diagonal `r + c`. The anti-diagonals are
visited from the smallest `r + c` to the largest, and along each one the
cells are read alternately: an even-indexed anti-diagonal is read from the
bottom of the matrix toward the top, an odd-indexed one from the top toward
the bottom.

### Example 1

![diagram](figures/498-1.svg)

```text
Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
Explanation: The anti-diagonals are `[1]`, `[2,4]`, `[7,5,3]`, `[6,8]`, and
`[9]`; the even ones are read bottom-up and the odd ones top-down.
```

### Example 2

```text
Input: mat = [[1,2],[3,4],[5,6]]
Output: [1,2,3,5,4,6]
Explanation: The anti-diagonals are `[1]`, `[2,3]`, `[5,4]`, and `[6]`; the
middle two are read in opposite directions, giving the zigzag.
```

### Example 3

```text
Input: mat = [[1]]
Output: [1]
Explanation: A single cell forms the whole traversal.
```

### Constraints

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 10⁴`
- `1 <= m * n <= 10⁴`
- `-10⁵ <= mat[i][j] <= 10⁵`

## Hints

### Hint 1

Every cell is identified by its anti-diagonal index `r + c`.

### Hint 2

The rows on a fixed anti-diagonal form one contiguous range; the parity of
the index picks the reading direction.
