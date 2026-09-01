# Solutions — Episode Length Histogram

## One counting arm per bucket

The output's four rows are fixed by the statement, not by the data — a
bucket with no episodes still reports `0` — so the query is naturally
a `UNION ALL` of four SELECTs that each emit one constant label and
one count. Every arm filters `Episodes` with its own `WHERE` range
over `runtime`: under 300 seconds, then `[300, 600)`, then
`[600, 900)`, and finally 900 or more. `COUNT(*)` inside each arm
returns 0 when the filter keeps nothing, which is exactly the
empty-bucket behavior required.

The bucket edges are half-open intervals of seconds — `[0-5>` means
`0 <= runtime < 300` — so each `WHERE` uses `>=` on the low edge and
`<` on the high one, with the last arm unbounded above. Episodes never
straddle buckets because the ranges partition the domain.

Four full scans of a small table is nothing next to the clarity of one
arm per bucket; row order is free since the comparison treats the
result as a multiset.

**Complexity:** `O(n)` time (four passes over the table), `O(1)` space.
