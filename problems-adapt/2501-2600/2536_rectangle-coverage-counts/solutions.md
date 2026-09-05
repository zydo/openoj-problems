# Solutions — Rectangle Coverage Counts

## Per-Row Difference Marks, One Reconstruction Pass

Recording a rectangle update lazily and materializing the grid once at the end
is the two-dimensional range-update pattern. Here it runs row by row: the
grid is viewed as `n` independent lines, and the rectangle `[r1, c1, r2, c2]`
becomes, for each row `r` from `r1` to `r2`, the 1-D instruction "add 1 over
columns `c1..c2`" — recorded as `+1` at `diff[r][c1]` and `-1` at
`diff[r][c2 + 1]`.

Every row carries one extra trailing slot (`n + 1` entries) so the write at
`c2 + 1` stays in bounds when the rectangle reaches the last column; the
sentinel slot is written, never read. After all rectangles are folded in, one
running sum per row rebuilds the true values: each `-1` cancels the pending
`+1` exactly where its rectangle stopped, so the reconstructed entry equals
the number of rectangles covering that cell.

Where the work goes matters at these limits. Recording touches
`r2 - r1 + 1` rows per rectangle, `O(q·n)` in total, while reconstruction is
the `O(n²)` that emitting an `n x n` answer cannot avoid; at `n <= 500` and
`q <= 10⁴` both fit comfortably, against `O(q·n²)` for adding cell by cell.
No rectangle needs special handling — a full-grid rectangle and a degenerate
single-cell one just land their marks where their coordinates put them, as
the stacked center cell of Example 3 shows (two `+1/-1` pairs on row 1, one
on row 2).

**Complexity:** `O(n² + qn)` time, `O(n²)` space.
