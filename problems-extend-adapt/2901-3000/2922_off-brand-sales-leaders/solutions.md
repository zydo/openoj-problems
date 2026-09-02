# Solutions — Off-Brand Sales Leaders

## Two-level aggregation: count distinct off-brand listings, keep the max

The inner query does the scoring: join `Sales` to `Listings` for each
listing's brand and to `Sellers` for each seller's preferred brand, keep
only the sales where the two differ (`i.listing_brand <>
u.preferred_brand`), group by seller, and count `DISTINCT listing_id` —
distinct because the same listing sold repeatedly is one unique listing,
as Example 1's seller 2 shows. The `WHERE` runs before grouping, so
on-brand sales are excluded before the count; sellers whose every sale
matches their preferred brand form no group at all and never appear.

The outer query keeps the winners: a correlated-free scalar subquery
reduces those per-seller counts to the single maximum, and the `HAVING`
clause compares each group's count against it. Ties therefore survive —
every seller at the maximum is returned, which is the "if several
sellers share the highest count, return all of them" rule — while
`ORDER BY o.seller_id` emits them in the ascending order the statement
fixes. When no seller has any off-brand sale, the inner query is empty,
`MAX` yields `NULL`, and the comparison eliminates every group, so the
result is empty.

Each aggregation scans the sales once after the joins; with `R` sales
the two levels are two passes plus a small sort of the winning group
keys.

**Complexity:** `O(R log R)` time, `O(S)` space.
