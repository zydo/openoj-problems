# Solutions — First Full Connection

Both rest on the same monotone fact: links never disappear, so replaying
the events soonest-to-latest can only fuse groups, never split them. The
bisection treats the sorted timeline as an answer space — the question "do
the `k` soonest events leave one group?" flips from no to yes exactly once,
and binary search finds that flip, paying a fresh connectivity probe per
step. The incremental replay walks the timeline once instead, fusing groups
as each event arrives and stopping at the first fusion that leaves a single
group, so no probe ever repeats work an earlier step did.

## Bisect Connectivity

The answer, when it exists, can only be an event's own moment:
connectivity changes solely when a link arrives, so the earliest
fully-connected instant is the time of some event. Sorting the events by
moment therefore lines up every candidate answer, and the task becomes
finding the first position in that line where all `n` elements form one
group.

That position is what a monotone predicate bisects. Links never disappear,
so once the first `k` events connect everything, the first `k + 1` do too —
"is the prefix of length `k` connected?" is false up to a boundary and true
from it on, exactly the shape binary search consumes. The code keeps an
inclusive range of prefix lengths and probes the middle with a throwaway
union-find: a fresh `parent` array, fusing along the first `k` events,
watching the component counter. A probe on the full length settles `-1`
before the search starts; once the range collapses, the last event of the
surviving prefix carries the answer — in Example 1 that prefix is three
events long, so the time-7 link is reported.

The template's price is repetition — every probe rebuilds connectivity from
nothing, so the events are re-scanned about `log E` times where a single
replay would touch each once. Each scan is near-linear, though, so the
whole search still lands inside the sort's `O(E log E)` budget: the same
asymptotics as the one-pass method, with constant work traded for the
generality of the answer-space pattern.

**Complexity:** `O(E log E)` time, `O(n)` space, for `E` events over `n`
elements.

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
