# Solutions — Co-Purchased Item Pairs

## Self-join on the co-purchase table

Two items are co-purchased exactly when one shopper has rows for both,
so the pair universe comes from joining `PurchaseLog` to itself on
`buyer_id`. The join condition `p1.item_id < p2.item_id` does two jobs at
once: it keeps each unordered pair exactly once (never `(a, b)` and
`(b, a)`, never an item paired with itself) and it fixes which side is
`item1` versus `item2` for the output columns. `units` plays no role —
co-purchase is about the existence of the purchase, not how much was
bought — so it never appears in the query.

The two section names come from joining `ItemCatalog` twice, once per side
of the pair; because `item_id` is that table's primary key, each join
adds exactly one row's worth of columns and no duplication can slip in.
Grouping by the two item ids (with their sections, which are
functionally determined by them) collapses the join fan-out to one row per
pair, and `COUNT(DISTINCT p1.buyer_id)` counts the distinct shoppers behind
it — the distinct keyword is redundant given the table's unique key, but it
states the intent and costs nothing. `HAVING ... >= 3` keeps only the pairs
that clear the co-purchase threshold, and the final `ORDER BY` presents
them by descending shopper count with the item-id tie-breaks the
contract asks for; the judge compares rows as an unordered multiset, so
that ordering is fidelity to the statement rather than a correctness
requirement.

**Complexity:** `O(P²)` joined rows for `P` purchases per user in the worst
case, `O(R)` space for the result.
