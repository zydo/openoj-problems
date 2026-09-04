# Solutions — Capped Submatrix Sum

A block is fixed by four numbers: its first and last row, its first and
last column. The cap — "largest total not exceeding `k`", with negative
values in play — is what forbids any clever maximum-subarray shortcut, so
both solutions end up considering blocks by their coordinates. They part
ways on how much of that consideration they make explicit. The honest one
builds a two-dimensional prefix table and then visits _every_ block,
reading each total in constant time from four table corners — no insight
about rows or columns, just complete coverage. The clever one enumerates
only the row pairs, collapses each band to a one-dimensional array, and
lets a sorted structure find the best column pair per band without ever
listing them.

## Block Enumeration with a 2-D Prefix Table

The prefix table is the whole machinery. `prefix[r][c]` holds the sum of
the rectangle covering the first `r` rows and `c` columns, built row by
row with the standard inclusion-exclusion recurrence; once it stands, the
sum of the block with rows `[top, bottom]` and columns `[left, right]` is

```text
prefix[bottom+1][right+1] - prefix[top][right+1]
                       - prefix[bottom+1][left] + prefix[top][left]
```

four lookups, no loops over cells. Four nested walks — top row, bottom
row, left column, right column — then read off every block the grid
contains, keeping the largest total that clears the cap; the guarantee
that some block fits keeps the answer defined, and negatives need no
special casing because no total is ever derived from a partial or
positional assumption — every candidate is a complete, exact block sum.
On Example 2, where the cap `k = -2` forces a negative answer, the walk
simply keeps the right-hand column's `-2` and discards the positive
blocks as over cap.

Nothing is missed and nothing is assumed; that is the method's virtue and
its cost. There are under `m²n²/4` blocks, each O(1) after an `mn`-sized
table, so at the constraint ceiling (a 100 × 100 grid) this is some 25
million constant-time checks — immediate in the compiled languages and
still within reach of the interpreter here, while the row-band solver
below replaces the innermost quadratic factor with a logarithmic one when
grids grow.

**Complexity:** `O(m²n²)` time, `O(mn)` space.

## Row Bands Plus A Sorted Prefix Search

There is no shortcut that skips the rows, so the rows are enumerated and
the columns are solved cleverly.

Fix a top row and let the bottom row descend from it. Maintain one array
holding, for each column, the sum of that column's cells between the two
rows. Dropping the bottom row by one adds a single row of cells into that
array, so maintaining it across the whole descent costs `O(n)` per step
rather than a fresh recomputation. Every block whose row range is the
current band is now a stretch of consecutive entries of that array, and
the problem has shrunk to one dimension: find the largest stretch total
that stays at or below `k`.

That one-dimensional question is answered with running sums. Walking the
array left to right, let `S` be the sum of everything up to and including
the current column. A stretch ending here has total `S - E` for some
earlier running sum `E`, where `E = 0` stands for a stretch that starts
at the first column. The total obeys the cap exactly when `E >= S - k`,
and among the candidates that qualify the smallest one yields the largest
total. Keeping the earlier running sums in sorted order turns that into a
single binary search for the first entry at or above `S - k`, after which
the current running sum is inserted in place for later columns to query.

Because the sums flowing through the search are running sums, the cap
must never be applied to a raw value — the comparison is always against
`S - k`, which is what allows negative caps and all-negative grids to be
handled without a special case. When no earlier running sum qualifies at
a given column, no stretch ending there is legal and the column simply
contributes nothing to the answer.

For the follow-up: the row pairs cost a quadratic factor and the columns
only a logarithmic one, so when one dimension is far larger than the
other, transpose the grid and let the short side drive the band
enumeration.

**Complexity:** `O(m² n log n)` time and `O(n)` space, or the same with
the dimensions swapped after a transpose.
