# Count Grid Paths

## Description

Consider a grid of `m` rows and `n` columns. A path starts in the top-left
cell and ends in the bottom-right cell, and at every step it moves either one
cell right or one cell down — never left, never up, never diagonally.

Given `m` and `n`, count how many distinct paths satisfy the rule.

Inputs are chosen so the answer never exceeds `2 * 10^9`.

### Example 1

```text
Input: m = 4, n = 4
Output: 20
Explanation: Every path takes 3 rights and 3 downs in some order, so counting
paths is counting the arrangements of RRRDDD — twenty of them.
```

### Example 2

```text
Input: m = 2, n = 9
Output: 9
Explanation: Each path is one down move placed among eight rights, and there
are nine positions for it.
```

### Example 3

```text
Input: m = 1, n = 5
Output: 1
Explanation: With a single row, only rights are possible and the path is
forced.
```

### Constraints

- `1 <= m, n <= 100`

## Hints

### Hint 1

How can a path arrive at a cell? Only from the cell above it or the cell to
its left — so the number of paths reaching a cell is the sum of two counts
you have already computed.

### Hint 2

Cells in the first row and first column are reached one way only: a straight
run of moves. Those ones seed the whole table.

### Hint 3

You never need the full table. One row of it is enough: sweep left to right
adding in the value from the left, having the same slot carry the value from
above before you overwrite it.

### Hint 4

Or skip the table entirely: a path is a fixed multiset of moves, and counting
distinct orderings of a multiset is one binomial coefficient. Which one?
