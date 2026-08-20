# Solutions — First Full Connection

## Union-Find over Time-Ordered Events

Connectivity through permanent links is precisely the relation a
disjoint-set forest maintains, so the whole task is a replay: apply the
events from soonest to latest, fuse the two endpoints' sets at each one,
and the first fusion after which only one set remains fixes the answer. A
moment before that fusion two groups are still apart; from it on, one group
holds everything. If the events run out first, the moment never comes and
`-1` is the result.

Sorting by moment comes first — the input order is irrelevant, as Example 2
shows with its final link listed first. The code then folds the sorted
events into a union-find structure with path-halving finds. It keeps a
counter of distinct groups, starting at `n`: every event joining two
different roots decrements the counter, and an event whose endpoints
already share a root (like the time-9 event of Example 1, reached only if
the answer had not already been returned) decrements nothing. The replay
stops at the first event that brings the counter to 1 and reports that
event's time.

The counter means no per-event scan over all `n` elements is ever needed;
near-constant amortized fusion cost makes the sort the dominant step.
Distinct times guarantee an unambiguous order.

**Complexity:** `O(E log E)` time, `O(n)` space, for `E` events over `n`
elements.
