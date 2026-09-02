# Solutions — Volunteers Who Fell Short

## Correlated sum of ceiling-rounded session minutes

A volunteer escapes the report exactly when their total worked minutes,
each session rounded up to the next whole minute, reaches
`pledge_hours * 60`. The query keeps every `Volunteers` row whose
correlated subquery over `Shifts` falls short: for that volunteer's
sessions it converts each pair of timestamps to whole seconds, divides by
60, and ceil-rounds so even a one-second session counts as a full minute.
A volunteer with no shift rows sums to NULL, which `COALESCE` turns into
zero — they always fall short.

Whole-second arithmetic matters here: converting the timestamp difference
through fractional days accumulates floating-point error that can push an
exact 47-minute session to 47.0000006 and ceil it wrongly to 48.

**Complexity:** `O(n log n)` time in the worst case (SQLite probes the
shift log per volunteer), `O(n)` space.
