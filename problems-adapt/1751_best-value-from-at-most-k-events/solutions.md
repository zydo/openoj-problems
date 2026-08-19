# Solutions — Best Value From at Most k Events

## Dynamic Programming with Binary Search

Ordering the events by closing day imposes a canonical sequence: any
clash-free selection, listed by when it finishes, walks forward through that
sequence, so a DP over prefixes of the sorted list always finds compatible
predecessors on the left. The state is `prev[i]` — the best total reachable
from the first `i` sorted events while attending at most `j - 1` of them —
and one sweep per extra allowed attendance promotes it to the next table, so
both dimensions live as rolling arrays of length `n + 1`.

Each sweep assembles `cur`, where `cur[i + 1]` is the best over the first
`i + 1` events with one further attendance in hand. Passing on an event
carries forward through a running maximum, and taking event `t` stacks
`values[t]` onto the best compatible prefix: the events closing strictly
before `starts[t]` are exactly the first `bisect_left(ends, starts[t])`
entries of the sorted order, located by binary search over the closing days.
The strict comparison is what encodes the rule that a shared day is a clash —
an event may not open on the day another closes.

Sweeping `min(k, n)` times from the all-zero table (zero attendances) leaves
the answer in `prev[n]`; sweeps past `n` events cannot add anything, since
each event is taken at most once. Sorting dominates the setup, and every
sweep performs `n` binary searches.

**Complexity:** `O(n log n + k n)` time, `O(n)` space.
