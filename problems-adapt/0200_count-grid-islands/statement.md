# Count Grid Islands

## Description

You are given a rectangular `grid` in which every cell holds `'1'` for land or
`'0'` for water. An **island** is a group of land cells joined edge to edge —
touching at a corner does not join two cells, and every cell outside the grid
counts as water.

Count the islands and return the number.

### Example 1

```text
Input: grid = [
  ["1","0","0","0","0"],
  ["1","1","0","0","0"],
  ["0","1","1","1","0"],
  ["0","0","0","1","0"]
]
Output: 1
Explanation: One landmass snakes from the top-left corner down to the bottom
right; however thin it gets, it never breaks.
```

### Example 2

```text
Input: grid = [
  ["0","1","1","0","0"],
  ["0","1","0","0","1"],
  ["0","0","0","1","1"],
  ["1","0","0","0","0"],
  ["1","0","0","0","0"]
]
Output: 3
Explanation: The hook at the top left, the pair on the right edge, and the
column at the bottom left are three separate landmasses; the diagonal gaps
between them do not join anything.
```

### Example 3

```text
Input: grid = [
  ["0","0"],
  ["0","0"]
]
Output: 0
Explanation: Water everywhere, so there is nothing to count.
```

### Constraints

- `grid` holds between `1` and `300` rows, each holding the same number of
  columns, also at most `300`.
- Every cell holds `'0'` or `'1'`.

## Hints

### Hint 1

Walk the cells in any fixed order. Each time you reach a land cell you have
not accounted for, you have met an island nobody has counted yet — add one,
and then make sure that island is never counted again.

### Hint 2

Accounting for an island means reaching every cell of it: from the cell you
found, spread to the land cells sharing an edge, and repeat until the spread
runs out of new cells.

### Hint 3

Mark cells as accounted for as you spread — in the grid itself or beside it —
so no later visit can start a second count for the same landmass.
