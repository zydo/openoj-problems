# Solutions — Organic and Seasonal Produce

Both flags are independent `Y`/`N` columns, and the request is their
conjunction: keep exactly the rows where `organic` and `seasonal` are
both `'Y'`, and project out the id.

## One filtered projection

A single `SELECT` with two equality predicates in the `WHERE` clause.
Each row passes or fails independently — no grouping, no joins — so the
engine scans the table once and emits the surviving ids. An empty result
is legitimate when no item carries both flags, and the output order is
free under the multiset comparison.

On example 1's rows, only ids 2 and 5 carry the `Y`/`Y` combination;
ids 1 and 3 each fail one flag, and id 4 fails both.

**Complexity:** `O(n)` time, `O(1)` extra space.
