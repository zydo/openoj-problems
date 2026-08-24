# Strange Printer II

## Description

A strange printer produces an `m x n` grid of colors under two rules:

- On each turn, the printer stamps a solid, axis-aligned rectangular
  region with a single color. That stamp completely covers whatever
  colors were previously in the region.
- Once a color has been used for a stamp, that same color can never be
  used again on a later turn.

You are given the finished grid `targetGrid`, where `targetGrid[row][col]`
is the color at position `(row, col)`.

Return `true` if some sequence of rectangle stamps can produce
`targetGrid`, or `false` if no such sequence exists.

### Example 1

```text
Input: targetGrid = [[1,1,1,1],[1,2,2,1],[1,2,2,1],[1,1,1,1]]
Output: true
```

### Example 2

```text
Input: targetGrid = [[1,1,1,1],[1,1,3,3],[1,1,3,4],[5,5,1,4]]
Output: true
```

### Example 3

```text
Input: targetGrid = [[1,2,1],[2,1,2],[1,2,1]]
Output: false
Explanation: It is impossible to form targetGrid because it is not allowed to print the same color in different turns.
```

### Constraints

- `m == targetGrid.length`
- `n == targetGrid[i].length`
- `1 <= m, n <= 60`
- `1 <= targetGrid[row][col] <= 60`

## Hints

### Hint 1

Think in reverse: given the finished grid, how could you tell which
color was stamped last?
