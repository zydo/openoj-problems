# Solutions — League Standings

## Split every fixture into two awarded rows, then join and sum

Each fixture hands points to both of its clubs, and the amount each side
earns depends on the goal comparison from that side's perspective. The query
first explodes `Fixtures` into one row per participating club: the home row
awards 3/1/0 by `home_goals` versus `away_goals`, the away row by the
mirrored comparison, and `UNION ALL` keeps them both.

`Clubs` is then left-joined onto those award rows and grouped. The left join
is what keeps a club that played no fixtures in the output — with no matching
award rows, `SUM` sees only nulls, so `COALESCE(..., 0)` reports its zero
points. Grouping by both `club_id` and `club_name` keeps every selected
column functionally dependent on the group key.

Finally `ORDER BY points DESC, club_id ASC` reproduces the required
ranking: points first, the smaller id breaking ties.

**Complexity:** `O(m + t log t)` time for `m` fixtures and `t` clubs (the log
from the final sort), `O(m + t)` space.
