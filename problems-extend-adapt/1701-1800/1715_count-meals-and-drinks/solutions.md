# Solutions — Count Meals and Drinks

One join-and-sum answers the question: walk every ticket, add its own
meals and drinks, and — when the ticket is paired with a combo — add the
combo's counts on top, so each row of the join carries one ticket's full
coverage and a final pair of sums totals them.

## LEFT JOIN each ticket onto its combo, sum both counts

`LEFT JOIN Combos c ON b.combo_id = c.combo_id` keeps every ticket in
the result: a ticket whose `combo_id` is NULL finds no combo row, and
the unmatched side of a `LEFT JOIN` yields NULLs rather than dropped
rows. That NULL is the query's one trap — NULL added to anything is
NULL, so a bare `SUM(b.meal_count + c.meal_count)` would wipe out every
combo-less ticket's counts. `COALESCE(c.meal_count, 0)` restores the
absent combo to zero before the addition. A combo shared by several
tickets simply matches several times, its counts applying once per
ticket — the example's combo 4 rides along with both ticket 11 and
ticket 12 — while a combo no ticket references never enters the join at
all, which is why the example's combo 13 contributes nothing even though
it sits in `Combos` with 2 of each.

With one row per ticket carrying that ticket's full coverage, the outer
aggregation is a plain pair of `SUM`s over the join. An empty `Tickets`
table leaves those sums with no input, and `SUM` over nothing is NULL
rather than 0, so `COALESCE(SUM(...), 0)` reports the required zero
totals. The result is a single row — there is no ordering to pin down.

**Complexity:** `O(n)` time, `O(1)` extra space (aggregation).
