# Solutions — First Login Date

## Min session date per player

The answer is one row per player carrying that player's earliest session
date, which is exactly a grouped aggregate: `GROUP BY player_id` gathers
each player's scattered rows into one group, and `MIN(session_date)`
reduces the group's dates to its earliest. Every `PlaySession` row records
a session — `rounds_played` may be 0 and the row still counts, and
`device_id` plays no part in the grouping — so the group minimum is by
definition the player's first login, and the pair `(player_id, first_login)`
leaves once per group.

The minimum needs no date arithmetic because the encoding already agrees
with the calendar: `session_date` values are ISO `YYYY-MM-DD` strings,
whose fixed-width, zero-padded fields sort lexicographically in
chronological order, so `MIN` over the text is the earliest date with no
`DATE()` conversion. Equivalent shapes reach the same rows: the window
`MIN(session_date) OVER (PARTITION BY player_id)` repeats the minimum on
every row of the player and so needs an extra `DISTINCT` to collapse back
to one row each, and the correlated
`(SELECT MIN(session_date) FROM PlaySession s2 WHERE s2.player_id =
PlaySession.player_id)` re-derives each player's minimum once per row — the
plain grouped aggregate states the collapse directly.

A single aggregation pass reads the `S` rows of `PlaySession` once and
materializes one output row per player, `P` of them; nothing beyond the
per-group minimum is retained.

**Complexity:** `O(S)` time, `O(P)` space.
