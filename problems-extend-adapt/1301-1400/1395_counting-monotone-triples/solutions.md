# Solutions — Counting Monotone Triples

## Middle position with paired side counts

Every monotone triple is determined by its middle index `j`: a rising
triple chooses a smaller value somewhere to the left and a larger one
somewhere to the right, and a falling triple swaps the two directions.
Distinctness of the ratings makes "smaller" and "larger" unambiguous, so
for each `j` the number of rising triples through it is
`less_left * greater_right` and the falling count is
`greater_left * less_right` — summing over all `j` counts every triple
exactly once, keyed by its middle.

The code implements that directly: an outer loop over `j`, an inner scan
of the prefix accumulating `less_left`, an inner scan of the suffix
accumulating `greater_right`, with the opposite counts derived by
subtraction (`j` entries stand to the left, `n - 1 - j` to the right, and
the ratings are distinct so every side entry is strictly on one side of
`rating[j]`). The answer accumulates as an int — at most `C(1000, 3) ≈
1.7 × 10⁸` triples, inside 32-bit range.

Each of the `n` middle positions costs two linear side scans, so the
whole pass is quadratic; nothing beyond a few counters is stored.

**Complexity:** `O(n²)` time, `O(1)` extra space.
