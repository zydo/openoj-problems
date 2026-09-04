# Solutions — Shoppers in the Discount Window

Eligibility is a per-row conjunction — a purchase inside the time window and
of at least the total threshold — and the answer counts the distinct shoppers
for which at least one row passes, so one filtered aggregate answers the
whole question.

## Filter the rows, then count distinct users

The `WHERE` clause keeps exactly the purchases with
`paid_at` inside `[2022-03-08 00:00:00, 2022-03-20 00:00:00]` and
`total >= 1000`. Writing the bounds as full timestamps is what makes the
endpoints inclusive: the statement reads each date at the start of its day,
and comparing against `'2022-03-20 00:00:00'` admits a purchase at exactly
that instant while still excluding `2022-03-20 09:43:42`. Timestamps in
`YYYY-MM-DD HH:MM:SS` form also order lexicographically the same as they do
chronologically, so the two string comparisons implement the interval
exactly.

`COUNT(DISTINCT shopper_id)` then collapses the surviving rows: a shopper with
several qualifying checkouts — or with qualifying and non-qualifying ones —
is counted once, and a shopper whose only checkouts miss either condition is
not counted at all. The aggregate always returns exactly one row, so the
empty-table case yields `shopper_cnt = 0` rather than no rows.

**Complexity:** `O(n)` time, `O(n)` space.
