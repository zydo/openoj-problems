# Solutions — Segment Triangle Check

## Test the three strict inequalities

Three segments form a nondegenerate triangle exactly when each pair sums to
more than the remaining segment. The `CASE` expression evaluates those three
strict comparisons for every `SegmentSets` row and emits `Yes` only when all
of them hold; any failed comparison yields `No`.

Strictness excludes a degenerate row where two side lengths add exactly to
the third. Each verdict depends only on the current row, so no joins,
aggregation, or ordering are needed.

The query performs one pass over the input while retaining only its output.

**Complexity:** `O(n)` time, `O(1)` space.
