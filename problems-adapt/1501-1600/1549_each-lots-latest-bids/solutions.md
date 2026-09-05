# Solutions — Each Lot's Latest Bids

## Hold each bid against its own lot's maximum date

A correlated subquery, `SELECT MAX(bid_date) FROM Bids b2 WHERE
b2.lot_id = b.lot_id`, works out the newest bid date for whichever lot
the outer row `b` belongs to. A bid survives the `WHERE` only when its
own `bid_date` equals that maximum, which keeps every bid that reached
its lot's latest date — a lone bid when the lot drew one offer that
day, several when competing buyers went after it at once, and nothing
for a lot absent from `Bids`, since such a lot never supplies an outer
row in the first place.

The surviving rows then join `Lots` to pick up the display name and
estimate id, and the final `ORDER BY` applies the statement's order —
`lot_name`, then `lot_id`, then `bid_id`, each ascending — so ties at
every level resolve exactly as the statement asks.

**Complexity:** `O(n log n)` time and `O(n)` space, where `n` is the
number of bids — the correlated subquery rescans each lot's bids for
its maximum date, and the closing sort outweighs the otherwise linear
join and projection.
