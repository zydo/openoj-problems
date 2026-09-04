# Solutions — Updatable Region Sums

## 2D Fenwick Tree (Binary Indexed Tree)

Both requests want the opposite thing from the stored data. Raw cells make a
write free and a question cost the rectangle's area; corner-anchored totals
make a question four lookups and a write an `O(m · n)` rebuild. The Fenwick
compromise stores totals of overlapping _pieces_, chosen so that any
corner-anchored region is the union of few pieces and any single cell lies in
few pieces. In one dimension the pieces are blocks of power-of-two length; in
two dimensions the same idea is applied along both axes at once.

Index the structure from `1` in both directions and let slot `(i, j)` hold the
total of the rectangle that is `i & (-i)` rows tall, `j & (-j)` columns wide,
and ends at row `i`, column `j`. Row and column `0` stay unused, which is what
makes the low-bit arithmetic terminate.

A corner-anchored total `prefix(r, c)` — rows `0..r-1` and columns `0..c-1` —
walks `i` down from `r` by `i -= i & -i`, and for each surviving `i` walks `j`
down from `c` the same way. The slots visited are pairwise disjoint and their
rectangles tile the region exactly, so their sum is the answer, and there are
`O(log m · log n)` of them. An arbitrary rectangle follows by inclusion and
exclusion over four such totals:

```text
regionSum(top, left, bottom, right)
    = prefix(bottom + 1, right + 1)
    - prefix(top, right + 1)
    - prefix(bottom + 1, left)
    + prefix(top, left)
```

A write climbs instead of descends: `i += i & -i` over rows, `j += j & -j`
over columns, which visits precisely the slots whose stored rectangle contains
the touched cell. What propagates is the difference `value - matrix[row][col]`,
not the new number, so a copy of the current grid is kept alongside the slots
and refreshed on every write — otherwise the second write to a cell would
apply the wrong shift.

Building slot by slot would cost `O(m · n · log m · log n)`. Linear
construction is easy here: turn each source row into a finished 1D Fenwick row
in a single pass — after slot `j` is complete, push it into `j + (j & -j)` —
then add that row into its own tree row and push the whole finished row into
tree row `i + (i & -i)`. Every partial total reaches its parent exactly once.

The Python and Java references implement the same structure; Java accumulates
in `long`, a habit worth keeping for rectangle totals even though a grid of at
most `200 × 200` cells bounded by `1000` in absolute value stays well inside
32 bits. A `1 × 1` grid works without a special case, since every loop still
runs over at least one valid index.

**Complexity:** `O(log m · log n)` per write and per question, after an
`O(m · n)` build, in `O(m · n)` space.
