# Solutions — Co-Purchased Section Pairs

## Section Affinity Self-Join

The grain of the question is the (customer, section) relationship, so the
query builds it first: `PurchaseLog` joins `ItemCatalog` on
`item_id` to translate every purchase row into a (shopper, section) pair,
and `SELECT DISTINCT` collapses them — a shopper who bought three
different Bakery items contributes one Bakery pair, and `quantity` never enters
the calculation at all. Self-joining that deduplicated set on `buyer_id`
with the ordering condition `a.section < b.section` then emits exactly
one row per (shopper, unordered section pair); the strict inequality
both forbids pairing a section with itself and fixes each pair's
orientation, so `COUNT(*)` after `GROUP BY section1, section2` is by
construction the number of distinct shoppers sharing both sections.

The reportability threshold and the presentation are one filtering pass:
`WHERE shopper_count >= 3` keeps only section_pairs with at least three shared
shoppers, and the outer `ORDER BY shopper_count DESC, section1,
section2` implements the stated tie-break ladder. The judge compares
result rows as an unordered multiset, so the explicit ordering is fidelity
to the statement rather than a correctness requirement. With `U` purchase
rows deduplicated into `P` (shopper, section) section_pairs, the self-join does at
most `SUM(k_u²)` work over per-user section counts `k_u`, and the
aggregation is linear in the join output.

**Complexity:** `O(U + P²)` time, `O(P)` space.
