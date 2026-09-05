# Solutions — The Rush-Hour Regulars

## Tag Rush Tickets Once, Then Judge Every Bar in HAVING

Every rule that defines a regular is a property of one guest's set of
tickets, so
the query is a single grouped pass. A small derived table scans
`diner_tickets` once and tags each row with an `is_rush` flag: the
time of day extracted with `strftime` has a fixed `HH:MM:SS` shape, so
comparing it as plain text against the four window bounds is already a
chronological comparison, and the half-open midday and dinner windows
become one two-branch `CASE`. Everything downstream aggregates that flag
instead of re-deriving the predicate.

The outer query groups by `guest_id` and judges all four bars in
`HAVING`, keeping every decision in integer arithmetic. The ticket-count
floor is `COUNT(*) >= 3`. The two share bars are cross-multiplied to
dodge floats: `5 * SUM(is_rush) >= 3 * COUNT(*)` pins the 60% bar, and
`2 * COUNT(star_score) >= COUNT(*)` pins the half-coverage bar. The
rating bar `SUM(star_score) >= 4 * COUNT(star_score)` says the rated
rows average at least 4.0 with no division at all.
`COUNT(star_score)` counts only non-NULL ratings, so unscored tickets
widen the totals but never leak into the average, and a group with no
ratings at all dies on the coverage test before its NULL sum could
matter. Only after qualification do the reported columns round: the
rush share scaled by 100.0 and the score sum scaled by 1.0 each pass
through `ROUND(..., 2)`, and ordering by the reported `avg_stars`
descending, ties broken by `guest_id` descending, emits the mandated
order straight from the sort.

Each ticket feeds a constant number of aggregate terms, so with hash
grouping the whole query is one linear sweep over the table (a
sort-based plan adds only a log factor); working storage holds one
accumulator set per distinct guest.

**Complexity:** `O(T)` time and `O(C)` space for `T` tickets and `C`
guests.
