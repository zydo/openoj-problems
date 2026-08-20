# Solutions — Cheapest Route in a Hidden Maze

## Survey the maze with DFS, then Dijkstra over the survey

Two phases again, but the second one changes character: with a toll on
every step, the shortest walk is not the cheapest one, so the survey is
followed by Dijkstra rather than BFS. Coordinates stay relative to the
start throughout — connectivity and tolls are all that matter, so the
origin doubles as the start cell. Each discovered cell records the toll
`move` reported when the walker entered it, exactly the edge weight the
second phase needs, and the cell where `isTarget()` rang true is
remembered. The origin gets toll 0: standing on the start charges
nothing.

The survey is an iterative depth-first walk that keeps the walker where
the algorithm is reasoning. Each stack frame holds a cell and an index
into the direction list; when an unvisited neighbour answers `canMove`
with `true`, the walker steps onto it, stores the returned toll, asks
`isTarget()`, and pushes a new frame. A frame out of directions is popped
and the walker steps back along its arrival direction — the `back`
pairing of opposite letters — so the walker retraces the DFS tree
physically. Every reachable cell is entered once and the `cost` table
ends up describing the full weighted graph, walls excluded because they
never pass `canMove`.

Dijkstra then settles cells cheapest-first: pop the smallest tentative
toll from a heap, skip the entry when it is stale, and relax each
surveyed neighbour to `settled + toll(neighbor)` when that improves on
its record. The first time the remembered goal cell is settled, its cost
is final — that is the answer. A survey that never heard `isTarget()`
means the goal lies in another component and the answer is `-1`.

Walk through Example 1, the four-cell maze with tolls `[[1, 4], [3, 2]]`.
From the origin the survey steps down (toll 3) and right (toll 4), then
from `(1, 0)` right again (toll 2) where the goal rings true. Dijkstra
settles the origin at 0, `(1, 0)` at 3, `(1, 1)` at 5 — relaxed from
below, because 3 + 2 beats 4 + 2 — and the answer is 5. The direct route
is one step shorter and one unit dearer.

The budget holds easily: a 100 x 100 maze costs a handful of `canMove`
probes per cell plus one step out and one back per tree edge — tens of
thousands of queries against the million allowed. The typed ports pack
`(row, col)` into a single integer key, and each keeps a real priority
queue: `PriorityQueue` in Java, `priority_queue` with `greater` in C++,
`container/heap` in Go, a `BinaryHeap` of reversed tuples in Rust.

**Complexity:** `O(mn log(mn))` time, `O(mn)` space.
