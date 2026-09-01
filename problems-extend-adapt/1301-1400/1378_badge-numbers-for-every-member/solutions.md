# Solutions — Badge Numbers for Every Member

## Approach: A left join keeps every member

Every member has to appear exactly once — carrying their badge number when
one exists and null when it does not. That is exactly what `Workforce LEFT
JOIN Badges` on the shared `id` yields: matched rows pick up `badge_no`
from the badge side, while unmatched rows keep every workforce column and
read null for the joined side. Selecting `badge_no` and `name` completes
the report.

**Complexity:** `O(W + B)` time for `W` workforce rows and `B` badge rows
(the hash join), `O(W)` output.
