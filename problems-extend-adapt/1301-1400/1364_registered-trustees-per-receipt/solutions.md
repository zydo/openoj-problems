# Solutions — Registered Trustees per Receipt

## Approach: Per-shopper trustee aggregates joined to receipts

Each receipt needs two per-shopper numbers, so compute them once in
subqueries and join. `trustees_cnt` comes from grouping `Trustees` by
`owner_id` with `COUNT(*)`; `registered_trustees_cnt` groups only the rows
whose `trustee_email` matches some row of `Shoppers` (an `EXISTS`
half-join keeps the count at one row per trustee even if an email appeared
twice among shoppers). Both aggregates are computed over all shoppers,
then `LEFT JOIN`ed to the receipt's owner so shoppers without any
trustees get `0` via `COALESCE` rather than dropping the receipt.

Finally join `Shoppers` for the name, and order the whole result by
`receipt_id`.

**Complexity:** `O(T + R log R)` for `T` trustee rows and `R` receipts
(the group-bys plus ordering the output), `O(R)` output.
