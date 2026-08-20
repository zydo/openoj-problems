# Solutions — Cheapest Route Within Time

## Time-Indexed Layered Dynamic Programming

Fee and duration pull in opposite directions — the frugal route can be the
slow one, the quick one the pricey — so cost-only Dijkstra has no way to
respect the deadline without discarding routes it should have kept. Instead
the graph is unfolded into layers stamped by exact arrival minute:
`layers[t][c]` holds the smallest total fee of any walk that leaves city 0,
obeys the road times, and pulls into city `c` at precisely minute `t`. Cost
comparison is meaningful inside a single layer, and pulling into the same
city twice, at different minutes, stays legal and often helps.

The recurrence is one line of thinking: seed `layers[0][0]` with
`passingFees[0]`, then for each `t` up to `maxTime` let every road
`(x, y, dt)` with `dt <= t` relax in both directions — arriving at `y` at
minute `t` is worth `layers[t-dt][x] + passingFees[y]`, and mirror-wise for
`x`. Each layer reads only earlier layers, so every combination of leg times
is reachable and no (fee, time) pair is ever compared with a different-time
pair. Layers are all retained because the destination may be reached early:
the answer is the minimum of `layers[t][n-1]` over all `t`, with `-1` when
that minimum is infinity.

Example 1 vs Example 2 shows the trade the layers encode: with `maxTime` 28
the northern drive 0 → 1 → 2 → 5 spends the whole budget for a fee of 15,
while at 27 that walk vanishes and the program falls back to the expensive
southern road for 60.

`maxTime` and the road count are each at most 1000, so the loops perform
roughly a million cheap relaxations, and the `dt > t` guard discards roads
that cannot fit into the minutes elapsed so far. The layered table, at
`O(maxTime·n)` cells, dominates memory.

**Complexity:** `O(maxTime·E)` time (`E` = number of roads),
`O(maxTime·n)` space.
