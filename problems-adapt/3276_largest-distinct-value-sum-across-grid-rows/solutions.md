# Solutions — Largest Distinct-Value Sum Across Grid Rows

## Bitmask dynamic programming over rows

A choice cares about two things only: which values exist, and which rows each
value lives in. The column coordinates are dead weight — nothing in the rules
reads them — so the grid first collapses into a map from value to the bitmask
of rows containing it. Row sets fit in a mask because there are at most ten
rows, and `dp[mask]` holds the best score of any partial choice that has used
exactly the rows in `mask`.

Values are consumed from largest to smallest. For each value the next table
starts as a copy of the current one — the "skip this value" option — and every
reachable mask can instead add the value in any of its rows not yet spent,
writing `dp[mask | bit] = max(·, dp[mask] + value)`. All transitions read the
pre-update table, which is what enforces taking a value at most once; walking
values in descending order means each addition is considered while it is still
worth as much as it can be.

The result is the maximum over every mask: some subset of rows supports the
best choice, the empty mask seeds the table with 0, and positivity of the
entries guarantees that a real choice beats the empty one. In example 1 the
value 7 sits in all three rows; the dp pays it once (top row) and then buys 6
and 5 with the rows that remain, reaching 18 — while example 2's paired 9s
resolve to 9 + 7 = 16 the same way.

**Complexity:** `O(V · 2ⁿ · n)` time (V = distinct values, n = rows),
`O(2ⁿ)` space.
