# Blanketing The Grid With Sensors

## Description

An `n x m` grid and an integer `k` are given.

A sensor sitting on cell `(r, c)` blankets every cell within Chebyshev
distance `k` of it, and the Chebyshev distance between cells `(r1, c1)` and
`(r2, c2)` is `max(|r1 - r2|, |c1 - c2|)`.

Work out how few sensors suffice to blanket every cell of the grid, and
return that count.

### Example 1

```text
Input: n = 6, m = 4, k = 0
Output: 24
Explanation: With k = 0 a sensor covers its own cell and nothing else, so
each of the 24 cells needs a sensor of its own.
```

### Example 2

```text
Input: n = 7, m = 3, k = 2
Output: 2
Explanation: One sensor blankets a 5 x 5 square, which already spans all 3
columns; a second one, offset below the first, covers the rows that remain.
```

### Example 3

```text
Input: n = 100, m = 100, k = 9
Output: 36
Explanation: Each sensor blankets a 19 x 19 square. Six strips of 19 rows
reach across 100 rows, and the same holds for the columns, so 6 x 6 = 36
sensors finish the job.
```

### Constraints

- `1 <= n <= 1000`
- `1 <= m <= 1000`
- `0 <= k <= 1000`

## Hints

### Hint 1

A radius-`k` sensor blankets a square of side `s = 2 * k + 1`.

### Hint 2

Tile the grid with those squares: the answer is
`ceil(n / s) * ceil(m / s)`.
