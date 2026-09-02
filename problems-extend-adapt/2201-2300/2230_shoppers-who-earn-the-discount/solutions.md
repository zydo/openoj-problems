# Solutions — Shoppers Who Earn the Discount

## Filter rows by the window and threshold, keep distinct shoppers

Eligibility is a per-row conjunction — a checkout whose `paid_at` falls
inside `[2022-03-08 00:00:00, 2022-03-20 00:00:00]` (both endpoints
inclusive) with `total >= 1000` — so a single filtered pass over the table
finds every qualifying checkout. Writing the bounds as full timestamps makes
the inclusiveness exact: dates read as start-of-day turn into these precise
instants, and `YYYY-MM-DD HH:MM:SS` strings order lexicographically exactly
as they do chronologically.

`SELECT DISTINCT shopper_id` then collapses qualifying checkouts to the set
of shoppers, ordered by `shopper_id`. A shopper with several qualifying
checkouts appears once; a shopper whose only checkouts each miss one
condition appears never. An empty or fully disqualified table returns no
rows rather than a
padded result — exactly the required shape.

**Complexity:** `O(n)` time, `O(n)` space.
