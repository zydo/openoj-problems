# Solutions — Visits On Autopilot

## One Group per Visit, Judged in HAVING

Every autopilot rule is a property of a visit's signal set, so the query
is a single grouped pass: group `telemetry` by `visit_id` and `device_id`
and judge all four criteria inside each group. The event-kind counts are
`SUM(event_kind = 'scroll')` and friends, since SQLite scores each row's
kind test as 1 or 0. The span never needs date arithmetic beyond a
subtraction: `strftime('%s', ...)` converts a timestamp to its
Unix-epoch seconds, so last-minus-first over `MIN`/`MAX` is a plain
integer gap, and the statement's guarantee that every timestamp sits on
a minute boundary makes dividing that gap by 60 an exact whole-minute
span.

All four admission rules are per-group facts, so they live in `HAVING`:
the epoch gap strictly greater than 1800 seconds, at least five scrolls,
and the ratio test written without division — `clicks / scrolls < 1/5`
cross-multiplies to `5 * clicks < scrolls`, which stays in integers and
never divides by zero, because any group still in play already holds at
least five scrolls. A purchase anywhere in the group zeroes the last
test — V03 in the example shows the ratio boundary cutting the other
way, since `5 * 1 < 5` is false. Visits that miss any rule simply lose
their whole group, which is what an empty result looks like here, with
no outer joins or extra branches. `ORDER BY scroll_total DESC,
visit_id ASC` emits the mandated row order; equal scroll totals fall
back to ascending visit ids.

Each signal row is read once and feeds a constant number of aggregate
terms, so with hash grouping the query runs in one linear sweep over the
table (sort-based plans add a log factor); working storage holds one
accumulator set per distinct visit.

**Complexity:** `O(P)` time and `O(V)` space for `P` signals and `V`
visits.
