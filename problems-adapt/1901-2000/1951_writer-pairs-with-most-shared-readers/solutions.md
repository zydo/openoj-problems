# Solutions — Writer Pairs With the Most Shared Readers

Two writers share a reader exactly when that reader follows both writers,
so the shared-reader count of a pair is a self-join on `reader_id` grouped
by the writer pair. The remaining work is to keep only the pairs whose
count ties the maximum.

## Self-join on reader, count, keep the maximum

Joining `Follows r1` against `Follows r2` on equal `reader_id` with
`r1.writer_id < r2.writer_id` produces one row per (pair, shared reader);
the strict inequality kills self-pairs and canonicalizes each pair with
its smaller id first. Grouping by the writer pair and counting `DISTINCT
r1.reader_id` yields the shared-reader count for every pair that shares
at least one reader — the rows of the `counts` CTE.

The outer query filters with `common = (SELECT MAX(common) FROM counts)`,
which translates the statement's "largest number of shared readers"
directly: every pair tying the max is returned, in any order. Only pairs
that share at least one reader appear in the join, which is exactly the
population the statement's `maxShared` ranges over — a pair sharing no
reader has count 0 and can never tie a positive maximum, so the filtering
never needs the cross product of all writers.

**Complexity:** `O(R²)` time in the worst case over `R` follow rows,
`O(R²)` space for the join output.
