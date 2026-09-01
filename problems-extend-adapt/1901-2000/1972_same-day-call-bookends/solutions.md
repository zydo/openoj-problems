# Solutions — Same-Day Call Bookends

## Unfold each call into both directions, then compare day extrema

A call always has two participants, and a user's day opens and closes
with whichever call happens to carry the earliest and latest timestamp
among the calls they joined — placed or received. The query first makes
both viewpoints explicit: every `PhoneLog` row is unfolded by `UNION
ALL` into two directional rows, one narrated from the origin's side and
one from the target's side. Each unfolded row carries a `user_id` (whose
day we are describing) and an `other_id` (who was on the other end).

A CTE then condenses the unfolded rows per `user_id` per calendar day —
`DATE(placed_at)` — into the day's `MIN(placed_at)` and
`MAX(placed_at)`. Joining that summary back onto the unfolded rows, once
on the opening timestamp and once on the closing one, recovers the
counterparty of the first call and of the last call; the `WHERE` clause
keeps a user only when those two counterparties coincide. `SELECT
DISTINCT` collapses the repeats that arrive when several days work for
the same user.

Matching on the bare timestamp is safe — a timestamp belongs to exactly
one calendar date, so the join cannot stray across a day boundary. A day
with a single call also needs no special handling: its minimum and
maximum are one and the same call, both joins land on that row, and the
two counterparties agree by construction.

**Complexity:** `O(n log n)` time, `O(n)` space, where `n` is the number
of `PhoneLog` rows.
