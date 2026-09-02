# Solutions — The Longest-Waiting Button

## Single scan with the tie rule

The wait behind each press is one pass away from the events: press `0`
waited exactly its own `time_0`, and every later press `i` waited
`time_i - time_{i-1}`, because the events arrive already sorted by time. So
there is no need to build that array — a single scan over the presses can
evaluate each wait the moment it is derived and keep only the best press
seen so far.

The scan replaces the incumbent in exactly two situations: the new wait is
strictly longer, or it is equal and the new button's index is smaller —
which is the statement's tie rule, "the smallest button index among them
wins". The comparison is deliberately asymmetric about scan order: ties
are not won by whoever came first in `events` but by the smaller button
index, so a press late in the array with a small index must still displace
an earlier press with a larger one. Values stay far below 32 bits (`time_i
≤ 10⁵`, waits below that, indices below that), so every language uses its
plain 32-bit integers.

**Complexity:** `O(n)` time, `O(1)` space, where `n = events.length`.
