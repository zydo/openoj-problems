# Solutions — Cheapest Apple Run From Every Town

## Dijkstra From Every Town

Fix a starting town and a destination `j`: the run goes out to `j`, buys, and
comes home. Coming back along the outbound route is optimal — any cheaper
homebound route would have been a cheaper outbound route too, and would have
been used in both directions. So with `d(j)` the shortest road distance from
the start, the run through `j` costs `appleCost[j] + (k + 1)·d(j)`: one part
for the apple, one weight of `1 + k` per unit of distance to cover both
legs. Staying home is the `j = start` case with `d = 0`, always a candidate.

That closed form makes the whole task `n` independent shortest-path
computations: from each town, run Dijkstra over the strictly positive road
weights (binary heap with lazy deletion — a popped entry older than the
recorded distance is dropped), then fold all towns through the formula and
keep the minimum. Positive weights are precisely what Dijkstra's correctness
rests on, and the constraints supply them.

Each pass costs `O((n + m) log n)` with adjacency lists, so the sweep over
all starts is `O(n·(n+m)·log n)` — comfortable with `n <= 1000` and
`m <= 2000`. Working memory is one distance array and heap per pass; the
adjacency list is shared by all of them.

Two classic slips are worth naming: charging the homebound multiplier only
once (treating the round trip as `2·d` regardless of `k`), and ruling out
distant towns by their apple price before distances are known — a cheap
apple one short hop away routinely beats the local stall, as the first
example shows from three different starts.

**Complexity:** `O(n·(n+m)·log n)` time, `O(n+m)` space.
