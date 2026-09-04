# Solutions — Earliest Arrival in a Timed Grid

## Dijkstra with Parity-Aware Waiting

Every step costs one second, so the arrival time at any cell has a fixed
parity relative to the start — and cells refuse entry before their threshold.
Waiting is still possible: bouncing back and forth across an edge already
open costs two seconds per round trip. From a cell reached at time `t`, the
earliest entry into a neighbour with threshold `g` is therefore the smallest
time at least `max(t + 1, g)` sharing the parity of `t + 1`: an even gap to
the threshold lands exactly on it, an odd gap one second later.

That rule makes arrival times non-decreasing along any route, which is
precisely the property Dijkstra needs. The grid becomes a shortest-path
graph: pop the cell with the smallest tentative time, relax its four
neighbours with the parity-adjusted arrival formula, and keep a `dist`
matrix of best-known times. The `t != dist[r][c]` check discards stale heap
entries, and the first pop of the bottom-right cell is provably minimal.

One obstruction cannot be waited out: if both neighbours of the top-left
cell demand more than one second, no first step exists (there is nothing to
bounce on yet) and the answer is `-1` at once. Otherwise an answer always
exists, since enough bouncing eventually satisfies any parity and threshold.
A `1x1` grid needs no walk and returns `0`. Each cell enters the heap once
per improvement, so the usual log factor over the grid size bounds the work.

Worked on Example 3, `grid = [[0,1,5],[2,8,1],[3,4,0]]`: the start's left
descent is closed at `t = 1` (threshold 2), so the only first step is right
at `t = 1`; a bounce returns to the start at `t = 2`, and the descent
`(1,0)@3, (2,0)@4, (2,1)@5, (2,2)@6` lands on the goal at `6` — the
thresholds `3` and `4` along the way are met exactly.

**Complexity:** `O(mn log(mn))` time, `O(mn)` space.
