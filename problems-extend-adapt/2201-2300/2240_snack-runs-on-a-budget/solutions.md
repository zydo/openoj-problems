# Solutions — Snack Runs on a Budget

## Enumerate chips, derive sodas

Fixing the number of chip bags bought determines everything else: after
spending `chips * cost1`, the remaining money admits `remaining // cost2 + 1`
soda counts (zero through the maximum). Summing that expression over
every affordable chip count — zero through `total // cost1` — counts each
(chips, sodas) pair exactly once.

**Complexity:** `O(total / cost1)` time, `O(1)` space.
