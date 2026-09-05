# Solutions — Shortest Route in a Hidden Maze

## Survey the maze with DFS, then BFS over the survey

The task splits cleanly in two: first learn everything the queries can
teach you, then solve an ordinary shortest-route problem on that
knowledge. Coordinates stay relative to the start the whole time — the
maze's absolute position carries nothing about connectivity, so the origin
doubles as the start cell and every discovered cell is remembered by the
displacement that reached it. The survey marks cells in a `seen` set and
notes the one cell where `isTarget()` returned true; since start and goal
differ, that discovery can only happen away from the origin.

The survey is an iterative depth-first walk that keeps the walker standing
where the algorithm is reasoning. Each stack frame holds a cell plus an
index into the direction list; whenever an unrecorded neighbour answers
`canMove` with `true`, the walker steps onto it, asks `isTarget()`, and a
new frame is pushed. When a frame runs out of directions it is popped and
the walker steps back along the direction it arrived on — the `back`
pairing of opposite letters — so the walker physically retraces the DFS
tree instead of teleporting. Every reachable cell is therefore entered
exactly once, and by the end `seen` is exactly the start's connected
component.

On the surveyed map the second phase is breadth-first search from the
origin: uniform step cost means the first frontier arrival at the
remembered goal cell is provably minimal, so its layer number is the
answer. A goal the survey never met lies outside the component and the
answer is `-1`.

Walk through Example 2, where the goal sits top-right and the wall at
`(0, 1)` closes the direct row. Take down as `+1` row: from the origin,
up and left leave the grid and right is walled, so the survey steps down
to `(1, 0)` — the only opening. From there the left edge blocks sideways
progress and the cell below is walled, so it continues right along the
middle row through `(1, 1)` to `(1, 2)`, where `isTarget()` still says
`false`, and finally up to `(0, 2)`, where the goal rings true. BFS then
layers the five recorded cells `0, 1, 2, 3, 4` outward from the origin,
and the goal lands on layer `4` — the answer.

The budget is generous by design: a cell costs at most four `canMove`
probes, one `isTarget()` ask, one step in and one step back — under ten
queries — so even a fully open 500 x 500 maze, a quarter-million cells,
spends an order of magnitude less than the 4 000 000 allowed. The typed
ports pack `(row, col)` into a single integer key with an offset that
keeps relative coordinates non-negative (`HashMap` in Java, `unordered_set`
in C++, a `Set` of composite numbers in JavaScript).

**Complexity:** `O(mn)` time and space for the survey plus the search,
with at most a constant number of oracle queries per cell.
