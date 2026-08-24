# Solutions — Triangle

## Bottom-up dynamic programming, one rolling row

Call `best(i, j)` the cheapest sum from cell `(i, j)` down to the bottom row. The statement allows exactly two moves from `(i, j)` — index `j` or index `j + 1` of the row below — so `best(i, j)` is the cell's own value plus the smaller of `best(i + 1, j)` and `best(i + 1, j + 1)`, the bottom row's cells are their own sums, and the answer is `best(0, 0)`. Running the recurrence upward rather than downward is what keeps the state small: a row only ever consults the row directly beneath it, never the whole triangle below.

The code carries that beneath-row as a single array, seeded with a copy of the bottom row. Each pass folds row `i` into it in place: `row[j] = triangle[i][j] + min(row[j], row[j + 1])`. Both reads are final before the write retires `row[j]`, and a row of `i + 1` cells touches only columns `0..i`, so one array is reused all the way up without ever growing — exactly the `O(n)` extra space the follow-up asks for, with `n` the number of rows. The triangle itself is never mutated.

A path takes one cell per row, so it crosses at most 200 values of magnitude at most 10⁴: no sum anywhere exceeds 2 × 10⁶, three orders of magnitude inside a 32-bit integer. The fixed-width ports therefore keep the triangle's own 32-bit cells for both the rolling array and the answer, with no widening.

**Complexity:** `O(n²)` time, `O(n)` extra space.
