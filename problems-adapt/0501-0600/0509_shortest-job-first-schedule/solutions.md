# Solutions — Shortest Job First Schedule

## Arrival Order plus a Min-Heap of the Waiting Jobs

Two structures carry the schedule. Job indices are pre-sorted by
`(ready, index)`, so arrivals stream past in an order that never moves
backward in time, while a min-heap keyed by `(length, index)` holds whatever
is currently waiting. That heap ordering is the selection rule verbatim —
shortest length first, smallest index on ties — so each scheduling decision
costs one pop.

The loop runs until every job has been enqueued and the heap is drained. An
empty heap means the processor is idle; instead of stepping the clock, it
jumps to the next job's readiness time (the `max` clamp keeps the clock from
running backwards). Crucially, everything available at the current instant is
pushed _before_ the pop: letting all simultaneous contenders into the heap at
once is what makes the index tie-break decide correctly.

The popped winner joins the answer, and the clock advances by exactly that
job's length. Every job is pushed once and popped once, and readiness times as
large as `10^9` are free because the clock only ever leaps to values taken
from the input.

**Complexity:** `O(n log n)` time, `O(n)` space.
