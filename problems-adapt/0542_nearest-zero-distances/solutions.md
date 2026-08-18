# Solutions — Nearest Zero Distances

## Multi-Source BFS

Doing what the statement literally asks — from each `1` cell, walk outward
until a `0` appears — means one search per cell, with the searches
retracing each other's steps almost everywhere. Flip the direction and the
work collapses: every `0` cell enters one queue at distance `0`, and the
combined wavefront spreads across the grid a step at a time. Whichever
wave reaches a cell first has arrived along a shortest route from that
cell's nearest zero, so one pass settles every cell at once.

The code keeps `dist` unset everywhere except the seeded zeros. A cell is
touched only while its distance is still unset, which serves as the
visited test, and the distance is written *before* the cell is enqueued —
that ordering is what keeps every cell out of the queue twice. Because
cells leave the queue in non-decreasing distance order, the first value
written to a cell is final; nothing that dequeues later can offer a
shorter route. Zeros are correct the moment they are seeded and are never
overwritten.

On `mat = [[0,1,1,1],[1,1,1,1],[1,1,1,0]]` the two corner zeros seed the
queue; the first ring around each fills with `1`, the cells between them
resolve to `2` from whichever side arrives first, and the whole grid is
settled without a single wasted revisit. The guarantee of at least one
zero means the queue starts non-empty, and a solid block of `1`s far from
any zero simply resolves at whatever wavefront distance reaches it.

Each cell is enqueued exactly once and each edge examined a constant
number of times, so the sweep is linear in the grid; the distance grid and
the queue (never larger than the current wavefront's perimeter) are both
bounded by the grid size.

**Complexity:** `O(m·n)` time, `O(m·n)` space.
