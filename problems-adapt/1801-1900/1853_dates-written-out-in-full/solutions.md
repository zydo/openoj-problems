# Solutions — Dates Written Out In Full

SQLite's date engine will number the weekday (`%w`, Sunday = 0) and the
month (`%m`) but will not name either, so the two names come from
explicit `CASE` maps. The one formatting subtlety is the day of the
month: the expected form prints `1`, not `01`, and an integer cast
round-trip strips the zero for free, while `%Y` already yields the
four-digit year as text.

## STRFTIME numbers, CASE name maps

Select from `Events` and concatenate one string per row: a `CASE` over
`STRFTIME('%w', event_day)` picks the weekday name, a `CASE` over
`STRFTIME('%m', event_day)` picks the month name, then comes the
unpadded day via `CAST(STRFTIME('%d', event_day) AS INTEGER)`, and
finally the year. Every ingredient is derived by SQLite from the stored
date itself, so leap years, century edges, and the weekday cycle are
the date engine's problem, not the query's.

One pass over the table; constant work per row.

**Complexity:** `O(N)` time for `N` rows, `O(1)` extra space.
