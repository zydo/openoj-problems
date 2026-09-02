# Solutions — Times Each Courier Was a Recipient

## Self-join deliveries onto the recipient seat

A courier's count must include the deliveries where they themselves were
the recipient, so the query joins `Deliveries` against itself: every row
`r` of the left-hand copy (one per courier) is paired with every delivery
`p` whose `recipient_id` matches `r.courier_id`. Keeping the join left
ensures a courier with no recipient appearances still produces a row.

`COUNT(DISTINCT p.delivery_id)` collapses each courier's matched
deliveries into the requested number — distinct because the join can
repeat a delivery once per courier row — and grouping by `courier_id`
yields one row per courier, with the count naturally reading zero for
couriers the `LEFT JOIN` left unmatched.

**Complexity:** one grouped self-join over the deliveries table, `O(n²)`
pair comparisons in the naive engine, `O(n)` space for the grouping.
