# Solutions — Smallest Covering Span per Query

## Offline sweep with a min-heap

Visiting the queries from smallest to largest gives every interval a
contiguous lifetime along the sweep: it becomes eligible the moment the
query value reaches its left end, and it is finished once the query value
passes its right end. With intervals sorted by left end, one forward-moving
pointer feeds them into the sweep, so each is pushed exactly once.

The eligible intervals live in a min-heap keyed by length
`(right - left + 1)`, each entry paired with its right end. For a query
`q`, every interval with `left <= q` is pushed first; then the heap is
cleaned lazily — while the top's right end is below `q`, that interval
covers neither `q` nor any later (larger) query, so popping and dropping it
is permanent. Whatever survives on top is the shortest interval covering
`q`; an empty heap means nothing covers it and the answer is `-1`.

The lazy deletion loses nothing, for two reasons. Because the queries only
grow, an interval dropped for ending too early fails every later query as
well. And a live interval buried under shorter dead ones is not stranded:
the dead ones are strictly shorter, so they come off first. Answers are
written through the query permutation, so the output returns in input
order.

**Complexity:** `O(n log n + q log q)` time, `O(n + q)` space.
