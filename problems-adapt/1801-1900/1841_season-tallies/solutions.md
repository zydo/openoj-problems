# Solutions — Season Tallies

Every fixture carries two mirrored halves of the truth: what the host
scored, the guest conceded, and the other way round. The clean SQL move
is to unpivot `Fixtures` into one row per club per fixture — a
host-perspective half and a guest-perspective half — after which each
column of the table is an ordinary aggregate.

## Unpivot fixtures, then aggregate

The subquery scans `Fixtures` twice through `UNION ALL`: once from the
host's side of the pitch (`goals_for = host_club_goals`) and once from
the guest's, with a `CASE` on the scoreline awarding the points — three
for a win, one apiece for a draw, nothing for a loss. A `LEFT JOIN`
from `Clubs` keeps clubs that have not played yet: their single all-NULL
half collapses under the aggregates into a zeroed row (`COUNT` ignores
NULLs and `COALESCE` turns the empty sum into `0`). Grouping by name
then produces the six requested statistics, with `goal_margin`
recomputed from the summed goals rather than stored, and the closing
`ORDER BY` encodes the tiebreakers: points descending, goal margin
descending, name ascending.

The whole query is two scans of `Fixtures` plus the join and the sort.

**Complexity:** `O(F log F)` time, `O(F)` space for the unpivoted rows,
where `F` is the number of fixtures.
