# Count All-Ones Squares

## Description

You are given an `m x n` grid `matrix` whose entries are all 0 or 1.

Count the square subgrids whose entries are all 1. Every side length counts:
a lone 1 is a square of side 1, a 2 x 2 block of 1s is itself a square and
also holds four of side 1, and so on. Two squares are counted separately when
they cover different cells or have different side lengths.

Return the total.

### Example 1

```text
Input: matrix =
[
  [1,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 17
Explanation: There are 11 squares of side 1, 5 of side 2, and 1 of side 3,
for 11 + 5 + 1 = 17.
```

### Example 2

```text
Input: matrix =
[
  [1,1,0],
  [0,1,1],
  [1,1,1]
]
Output: 8
Explanation: Seven squares of side 1 plus the 2 x 2 block in the bottom-right
corner gives 8. No side-3 square exists: the top row and the left column each
hold a 0.
```

### Example 3

```text
Input: matrix =
[
  [1],
  [1],
  [1],
  [1]
]
Output: 4
Explanation: The grid is one cell wide, so only the four 1 x 1 squares exist.
```

### Constraints

- `1 <= matrix.length <= 300`
- `1 <= matrix[0].length <= 300`
- `matrix[i][j]` is 0 or 1

## Hints

### Hint 1

Every square you are counting is anchored somewhere. What does a cell need
its left, upper, and upper-left neighbors to provide for a big square to end
exactly at that cell?

### Hint 2

A cell holding 1 and surrounded by three neighbors that can each close a
square of side `k` closes one of side `k + 1` — take one plus the smallest
of the three.

### Hint 3

A cell that closes a square of side `k` also closes the `k - 1` smaller ones
nested inside it. Sum those values over the whole grid and every square has
been counted once.
