# Solutions — Arena Attendance Run

## Neighbor windows over visit identifiers

A qualifying row occupies the first, middle, or last position of a
three-visit run. The query orders `ArenaVisits` by `visit_id` and uses
`LAG` and `LEAD` to attach the two preceding and two following identifiers
and attendance counts to each row. It then tests each of the three possible
positions in a qualifying window.

Checking `next_id1 = visit_id + 1` and similar equalities matters: adjacent
rows in sorted order do not form a run if an identifier is missing. Every
row in a longer run belongs to at least one qualifying three-row window. The
final sort uses `arrival_date`, as requested.

The window functions share one sort of `S` visits and retain their window
state while emitting a subset of the rows.

**Complexity:** `O(S log S)` time, `O(S)` space.
