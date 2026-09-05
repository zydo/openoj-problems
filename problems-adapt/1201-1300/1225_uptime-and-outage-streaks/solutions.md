# Solutions — Uptime and Outage Streaks

## Gaps and islands via two row numbers

The two tables first collapse into one day stream: every in-range date with
its state, through a `UNION ALL` of filtered `Outages` and `Passes` rows.
Dates outside `2019-01-01..2019-12-31` never enter the stream, which is what
drops the 2018 rows the example carries.

Splitting the stream into maximal runs of one state is the classic
gaps-and-islands trick. Number all days globally, then number them again
per state. Inside one uninterrupted run of the same state the two counters
advance in lockstep, so their **difference is constant**; the run's first
boundary — either a day of the other state or a calendar gap — desynchronizes
them and the difference shifts. `(run_state, difference)` therefore names
exactly one island, and grouping on that pair with `MIN(d)`/`MAX(d)` yields
each interval's endpoints.

A final `ORDER BY start_day` reports the intervals chronologically.

**Complexity:** `O(d log d)` time for the `d` in-range days (two window sorts),
`O(d)` space.
