# Solutions — Missing Attendee IDs

## Recursive CTE generating the full range, then anti-joined against Attendees

SQLite has no built-in `generate_series` in this judge's build, so the
query manufactures the candidate range `[1, MAX(attendee_id)]` itself
with `WITH RECURSIVE`: the anchor row starts the sequence at 1, and the
recursive step adds one more row per iteration as long as the previous
value stays below `MAX(attendee_id)` — a scalar subquery evaluated once
against `Attendees`. This produces every integer from 1 up to the
current maximum badge number, inclusive, regardless of which specific
numbers the table actually holds.

Each generated id is then checked with `NOT IN (SELECT attendee_id FROM
Attendees)`: an id survives only if no row of `Attendees` carries it, so
the surviving rows are exactly the ids in range that are missing from
the table — never an id below 1, and never one above the current
maximum, even when the smallest `attendee_id` present is itself well
above 1. `ORDER BY ids` finishes the query with the required ascending
sort on the single output column.

**Complexity:** proportional to `MAX(attendee_id)`, since the recursive
CTE materializes one row per integer in the range and the anti-join
scans `Attendees` once per candidate id.
