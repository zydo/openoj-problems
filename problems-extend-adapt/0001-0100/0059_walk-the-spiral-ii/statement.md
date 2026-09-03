# Walk The Spiral II

## Description

This is the writing counterpart to walking a spiral: instead of reading an
existing grid, you build one. Given a positive integer `n`, create an
`n x n` grid and lay the values `1` through `n²` into it following a
clockwise spiral that starts at the top-left cell — the first row fills left
to right, then the last column fills downward, the last row right to left,
and the first column upward, after which the same pattern repeats one layer
in. Return the finished grid.

### Example 1

![diagram](figures/59-1.svg)

```text
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
Explanation: The first three values run across the top, `4` through `6`
descend the right edge, `7` through `9` close the ring by travelling left
along the bottom and up the left side.
```

### Example 2

```text
Input: n = 2
Output: [[1,2],[4,3]]
```

### Constraints

- `1 <= n <= 20`
