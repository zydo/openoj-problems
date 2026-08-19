# Solutions — Non-Adjacent Sum Under Point Updates

## Segment tree of 2×2 boundary matrices

The textbook recurrence for the best non-adjacent sum sweeps the whole array,
and 5·10⁴ point updates cannot afford that. The escape is that the constraint
is local: a segment's best selections are pinned down by four numbers — the
best sum for each choice of whether the segment's first entry is picked (row)
and whether its last entry is picked (column). Gluing two neighboring segments
means joining their boundary states, with the one forbidden combination being
both sides picked at the seam.

The merge enumerates the left exit state k and the right entry state l,
skipping k = l = 1 (that would pick the two entries facing each other across
the seam) and keeps the largest `left[i][k] + right[l][j]` per outer pair
(i, j). Associativity makes the four numbers a monoid fit for a segment tree:
a leaf is `((0, NEG), (NEG, x))` — one entry either is skipped (sum 0, neither
boundary picked) or stands alone — and after any updates the root holds the
boundary states of the entire array.

Every update rewrites one leaf and re-merges the O(log n) nodes above it; the
maximum over the root's four cells is then the current best non-adjacent sum.
NEG is a hugely negative sentinel that keeps impossible boundary pairings from
ever winning — and it is what lets an all-negative array report 0, the empty
selection, as in Example 2. Per-update answers accumulate modulo 10⁹ + 7.

**Complexity:** `O(n + q log n)` time, `O(n)` space.
