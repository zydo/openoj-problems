# Solutions — The Earliest Moment When Everyone Become Friends

## Union-Find over Sorted Logs

Acquaintance spreads exactly like connectivity: processing the friendship events in time order and merging the two endpoints' components models the social group faithfully, and everyone is acquainted precisely when the component count reaches one. So the task reduces to replaying events chronologically and reporting the timestamp of the merge that closes the last divide — a union-find problem.

The code sorts the logs by timestamp (the default tuple order puts the timestamp first), then folds each event into a union-find structure with path-halving finds. A counter starts at n components; every union of two distinct roots decrements it, redundant events (already-friends pairs, like the 20190224 log in the example) change nothing, and the loop returns the instant the counter hits 1. If the logs are exhausted first, no such moment exists and -1 is returned.

The component counter avoids any per-step global scan over all n people, so each event costs near-constant amortized time and the sort dominates. Edge cases: timestamps are guaranteed unique so no two events vie for the same moment, and even a fully connected history returns at the event that completes the tree rather than at the end.

**Complexity:** `O(E log E)` time, `O(n)` space, for E logs over n people.
