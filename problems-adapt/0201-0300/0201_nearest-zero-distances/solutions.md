# Solutions — Nearest Zero Distances

Two routes to the same distance grid. The multi-source sweep lets every
zero broadcast outward and reads each cell's answer off the first
wavefront to arrive; the two-pass recurrence never searches at all — it
settles the grid in place, twice, each cell taking one plus the best of
two already-settled neighbours. A queue and a wavefront against four
arithmetic operations per cell.

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
visited test, and the distance is written _before_ the cell is enqueued —
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

## Two-Pass DP

Every distance here is defined by a neighbour: a cell sits exactly one
step farther from the nearest zero than the cell you would walk to next
on the way there. That is a recurrence, and it needs no queue — only a
visiting order in which the neighbours it reads are already settled.

No single sweep provides that order, because a cell's nearest zero can lie
in any of four directions. Two do: one pass from the top-left inwards,
each cell taking one plus the smaller of its top and left neighbours, then
one pass from the bottom-right inwards doing the same with the bottom and
right neighbours. A shortest walk never doubles back on itself, so its
last step into any cell arrives from a direction one of the two sweeps
processes first — and because the second sweep starts from the first's
results, even a walk that leaves a cell heading up-and-right is priced
correctly: one leg is accounted for by each pass. Cells start at `0` when
they hold a zero, otherwise at `m·n + 1` — farther than any real distance
can reach, so an unset value relaxes harmlessly and is always overwritten
before the end.

On `mat = [[1,1,1],[1,1,0]]` the forward pass is all formality: the lone
zero sits below and right of everything, so every other cell stays at the
sentinel. The backward pass then does the real work, walking the bottom
row to `2, 1, 0` and the top row to `3, 2, 1`, one relaxation at a
time.

Both sweeps touch every cell once and do constant work there, and the
relaxations overwrite the distance grid in place — nothing is queued,
ordered, or remembered beyond the answer itself.

**Complexity:** `O(m·n)` time, `O(1)` space beyond the returned grid.
