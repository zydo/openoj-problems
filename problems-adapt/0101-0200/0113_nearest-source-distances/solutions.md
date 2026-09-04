# Solutions — Nearest Source Distances

## Multi-Source BFS

The naive reading of the task — for each open cell, hunt for its closest
source — repeats an enormous amount of work, since neighbouring cells
rediscover the same routes. Turning the search around removes the repetition
entirely: drop _every_ source into the queue at the start and let a single
breadth-first sweep flow outward across the grid. BFS uncovers cells in order
of increasing distance, so the moment a cell is first reached, it has been
reached along a shortest route from whichever source got there first. One
sweep answers the question for every cell at once.

The queue is primed with each cell holding `0`, with a counter starting at
zero. Every iteration bumps the counter and drains the entire current layer,
stamping that counter into each not-yet-known open cell the layer touches. A
cell counts as not-yet-known exactly while its value is still the sentinel, so
the act of writing the distance is also the act of marking it seen — no
separate visited structure is required. Blocked cells and sources never equal
the sentinel, which is why the sweep neither overwrites them nor walks
through them.

Draining a full layer before starting the next is the part that makes the
numbers correct: every cell at distance `d` is discovered before any cell at
`d + 1` is labelled, and that ordering is exactly the invariant breadth-first
search rests on. No cell is ever queued twice, so the sweep visits each of the
`m · n` cells a bounded number of times.

The degenerate inputs need no special handling. A grid holding no sources
never expands at all and comes back unchanged, leaving unreachable cells at
the sentinel as required. A grid that is entirely blocked cells, or entirely
sources, is likewise returned as it arrived, and a one-cell grid is trivial.

**Complexity:** `O(m·n)` time, `O(m·n)` space.
