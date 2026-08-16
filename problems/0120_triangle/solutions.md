# Solutions — Triangle

## Bottom-Up Dynamic Programming

Working from the last row upward removes every boundary case. Let `dp[i]`
be the minimum path sum from column `i` of the current row down to the
bottom; the last row initializes `dp` with its own values, since a path
starting there is just that cell. For each row above, a cell at index `i`
may step to `i` or `i + 1` below, so its best continuation is its own
value plus the smaller of the two sums already computed beneath it, and
`dp` shrinks by one entry per row until only `dp[0]` — the answer at the
apex — remains.

A single rolling array is enough because each row only reads the row
below it. Updating `dp[i]` in place with `i` ascending is safe: it reads
`dp[i]` and `dp[i + 1]`, and index `i + 1` has not been overwritten yet
when it is read. The bottom-up direction also sidesteps the ragged edge
cells that a top-down sweep would have to special-case, where a cell has
one parent instead of two.

A one-row triangle never enters the loop and returns its only value
directly, and negative entries cause no trouble — the recurrence takes
the minimum regardless of sign.

**Complexity:** `O(n²)` time, `O(n)` space, for `n` rows — every one of
the `n(n+1)/2` cells is folded in once, and the rolling `dp` array holds
at most one row.
