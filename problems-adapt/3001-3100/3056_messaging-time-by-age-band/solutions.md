# Solutions — Messaging Time By Age Band

## Conditional aggregation over the joined bands

Each event must reach its owner's age band before anything aggregates:
an inner join `FROM Events a JOIN AgeGroups g ON a.member_id =
g.member_id` attaches `age_band` to every event whose member exists in
both tables, and silently drops the two degenerate populations —
events of members the `AgeGroups` table never heard of, and members
with no events at all. Grouping the surviving rows by `age_band`
collapses them into one group per band that still carries event time;
a band whose every member is inactive never forms a group, so it
produces no output row without any special-casing.

Inside a group the send/open split is conditional aggregation:
`SUM(CASE WHEN a.event_kind = 'send' THEN a.minutes ELSE 0.0 END)`
totals the sending minutes while `SUM(a.minutes)` totals everything,
so each percentage is that part divided by the whole, scaled by 100
and squeezed through `ROUND(..., 2)` per the statement. A band whose
members only ever sent reports `open_perc = 0.0` honestly rather than
losing a column, and SQLite's `ROUND` returns a REAL even when the
value is whole, matching the expected numbers exactly. The judge
compares result rows as an unordered multiset, so no `ORDER BY` is
needed.

**Complexity:** `O(E + M)` time for `E` event rows and `M` `AgeGroups`
rows — the join probes one side against the other and the grouping is
linear in the join output — and space proportional to the join result
plus one accumulator per band group (at most three distinct bands).
