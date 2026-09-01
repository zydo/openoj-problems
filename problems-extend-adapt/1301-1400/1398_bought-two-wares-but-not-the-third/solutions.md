# Solutions — Bought Two Wares but Not the Third

## Approach: Three membership tests

A patron qualifies exactly when their `patron_id` shows up among the
baskets holding ware `A`, shows up among the baskets holding ware `B`,
and never shows up among the baskets holding ware `C`. Three membership
tests over `Baskets` say that directly, joined with `IN` / `NOT IN` —
each test cares about presence, not counts, so repeat purchases of `A`
change nothing.

The query filters `Patrons` with those three subqueries and returns the
surviving `patron_id`, `patron_name` pairs ordered by `patron_id`. Each
subquery reads the basket rows once, and SQLite can run them as
semi-joins.

**Complexity:** `O(P + K)` time over `P` patrons and `K` basket rows,
`O(P)` output space.
