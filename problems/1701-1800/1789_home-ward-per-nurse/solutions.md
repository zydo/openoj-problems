# Solutions — Home Ward per Nurse

The table holds one row per (nurse, ward) membership with a
`Y`/`N` home flag, and a row belongs in the answer when it is marked
`'Y'` or when it is that nurse's only membership — so the shape is a
filtered selection whose predicate consults a per-nurse count.

## Flag or sole membership

The `WHERE` clause keeps a row when `home_flag = 'Y'`, or when the
nurse appears in exactly one row — computed by a `GROUP BY
nurse_id` subquery with `HAVING COUNT(*) = 1` and tested via `IN`.
The two disjuncts are independent: a single-ward nurse's row
survives through the count even though its flag reads `'N'` (the
statement's note), and a nurse who serves several wards
contributes exactly the rows they flagged — all of them when the
data marks several, none when it marks none. Every output row is a
surviving input row, so no outer grouping is needed, and the result
order is free under the multiset comparison.

On the example rows: nurses 6 and 7 each hold a single `'N'`-flagged
row, so the count admits both; nurses 5 and 8 pass their one `'Y'`
row through the flag test while their other memberships do not.

**Complexity:** `O(n)` time, `O(n)` space.
