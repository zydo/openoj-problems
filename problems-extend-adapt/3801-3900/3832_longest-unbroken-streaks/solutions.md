# Solutions — Longest Unbroken Streaks

The definition is a gaps-and-islands problem in disguise: first discard
the days that cannot belong to any streak, then cut each member's
remaining same-event days into maximal runs of consecutive calendar
dates, and finally keep each member's longest qualifying run.

## Island grouping on consecutive same-event days

`solo_days` collapses the table to one row per `(member_id, log_date)`
and keeps only groups of size one, which is the definition's "exactly
one event per day" read directly off the data: the primary key already
rules out duplicate identical rows, so a group of two or more is a day
on which the member logged several different events, and such a day can
never be inside a streak. `ranked` then numbers the surviving days per
`(member_id, event)` in date order, and subtracting that rank from the
date — `DATE(log_date, '-' || rn || ' days')` — yields the island key:
on a run of consecutive days the date advances by exactly one day per
row, so date minus rank stays constant on the run and jumps across any
gap.

`runs` groups by `(member_id, event, key)`, so each group is one
maximal run: `COUNT(*)` is its length, and `MIN(log_date)` /
`MAX(log_date)` its span (ISO `YYYY-MM-DD` text sorts chronologically).
`HAVING COUNT(*) >= 5` applies the minimum-streak threshold, and `best`
keeps one row per member with `ROW_NUMBER() ... ORDER BY run_length
DESC, start_day ASC, event ASC` — the longest-run rule; the last two
keys only make the winner deterministic in the degenerate case of a
member with two equal-longest streaks. The final
`ORDER BY run_length DESC, member_id ASC` produces the required output
ordering.

SQLite evaluates the whole chain as a grouped pass, a window sort, and
an aggregation over the surviving days — a logarithmic sort factor over
one scan of the table, with the islands held in memory before the
per-member pick reduces them to one row each.

**Complexity:** `O(n log n)` time, `O(n)` space.
