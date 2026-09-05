# Every Clear Route II

## Description

A walker starts in the top-left cell of a grid and wants to reach the
bottom-right cell. Each step moves one square down or one square right.
Some squares are blocked and may not be entered at all.

The grid is given as a matrix of 0s and 1s, where `0` marks an open
square and `1` marks a blocked one. Count how many distinct routes from
corner to corner touch only open squares.

You may assume the count for every test grid is at most `2 * 10⁹`.

### Example 1

![diagram](figures/63-1.svg)

```text
Input: grid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
```

The single blocked square sits in the middle of this 3x3 board, and two
walks skirt around it: three rights followed by three downs, or the
same moves with the downs taken first.

### Example 2

![diagram](figures/63-2.svg)

```text
Input: grid = [[0,1],[0,0]]
Output: 1
```

The blocked square kills the top route, so exactly one way remains.

### Constraints

- `m` is the number of rows and `n` the number of columns; each row
  holds `n` entries.
- `1 <= m, n <= 100`
- Every cell is `0` (open) or `1` (blocked).

## Hints

### Hint 1

Every arrival at a cell comes from its left or its upper neighbor, so
counts for earlier cells already determine the count for the current
one — a classic dynamic-programming scan.

### Hint 2

Track, for each cell, how many routes end there: it is the sum of the
counts of the cell above and the cell to the left. A blocked cell
contributes nothing — force its count to zero so nothing downstream
can pass through it.
