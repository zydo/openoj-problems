# Solutions — Seen From The Right Edge

## Breadth-first search, last node of each level

Seen from the right, a tree shows exactly one node per depth: the rightmost node at that depth. A queue makes that definition literal — when a round of the outer loop begins, the queue holds exactly one level's nodes, left to right. Each round fixes that count up front, drains exactly that many nodes off the front while appending their children at the back, and so hands the next level, intact, to the following round. Fixing the count is what keeps children enqueued mid-round from bleeding into the current level.

Because a round already produces its level left to right, the level's last value is the one the right side sees, so the method simply appends it to the answer and discards the rest. No special cases: an empty tree never enters the loop and returns `[]`, and a left-skewed tree needs no adjustment — its levels are singletons, and the left chain is simply what the right side sees.

**Complexity:** `O(n)` time — every node enters and leaves the queue exactly once — and `O(n)` space for the queue and the per-level buffers.
