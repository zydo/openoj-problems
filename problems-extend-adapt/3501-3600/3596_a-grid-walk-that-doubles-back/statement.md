# A Grid Walk That Doubles Back

## Description

You are given two integers m and n, the row and column counts of a grid.

Stepping into cell `(i, j)` costs `(i + 1) * (j + 1)`.

The walk opens by entering cell `(0, 0)` as its first move, paying that
cell's entrance cost. After that, every step goes to an adjacent cell, and
the permitted directions alternate:

- Odd-numbered moves must go right or down.
- Even-numbered moves must go left or up.

Return the smallest total cost with which the walk can end at
`(m - 1, n - 1)`, or -1 if that cell can never be reached.

### Example 1

```text
Input: m = 1, n = 2
Output: 3
Explanation: Entering (0, 0) first costs (0 + 1) * (0 + 1) = 1. The next
move is odd, so the walk steps right into (0, 1), paying
(0 + 1) * (1 + 1) = 2. The destination is reached, and the total is
1 + 2 = 3.
```

### Example 2

```text
Input: m = 2, n = 4
Output: -1
Explanation: After stepping to (0, 1) or (1, 0), the forced even move can
only head straight back toward (0, 0) — stepping any further out would
leave the grid — so the walk can never push deeper than one cell from the
corner, and (1, 3) stays out of reach.
```

### Example 3

```text
Input: m = 6, n = 6
Output: -1
Explanation: No matter how the odd moves are chosen, every even move
walks the walk back to its previous cell, so the far corner of even a
large grid is unreachable.
```

### Constraints

- `1 <= m, n <= 10⁶`

## Hints

### Hint 1

Look at what an odd move can achieve: it lands on (0, 1) or (1, 0), one
step from the corner.

### Hint 2

From either of those cells, the mandated even move cannot go further out
without leaving the grid, so it retraces the odd move exactly.

### Hint 3

That ends the pattern: the walk is trapped among (0, 0), (0, 1), and
(1, 0) forever — so only grids whose far corner is one of those three
cells have an answer at all.
