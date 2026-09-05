# Solutions — Count Grid Islands

Both variants are the same spread over the land cells; each cell of each
landmass is reached exactly once, and the two differ only in the order the
frontier is drained and the constants of the container holding it.

## DFS

The same spread with the other frontier discipline: a stack. Seeding is
identical, but the cell leaving the stack is the most recently pushed one, so
the spread digs to the far end of a peninsula before returning to explore the
seed's other neighbours — one landmass is carved in a single depth-first
sweep. The stack is explicit rather than the language's call stack, because a
300×300 all-land grid would otherwise need one call frame per cell and
overflow long before the spread finished.

**Complexity:** `O(m·n)` time — each cell is pushed at most once and each edge
is examined a constant number of times. `O(m·n)` extra space in the worst case:
unlike the queue, the stack can hold an entire landmass before it begins to
drain.

## BFS

Spread over one island ring by ring, holding the frontier in a queue. The scan
walks the cells row by row; the first unaccounted-for land cell it meets is the
seed of a new island, so the count goes up by one and the seed enters the
queue marked. From then on each cell leaving the queue offers its four edge
neighbours a place in it — marked on entry, so no cell can be queued twice —
and the spread ends when the queue drains. At that point the entire landmass
is accounted for, and the row-by-row scan resumes until it finds the next seed
or runs out of grid.

Marking on entry rather than on exit is what keeps each cell out of the queue
after its first appearance, and marking in a separate array leaves the input
untouched. The ring-by-ring order is irrelevant to the count but makes the
traversal easy to picture: the frontier is always roughly the set of cells at
one distance from the seed.

**Complexity:** `O(m·n)` time — each cell is enqueued at most once, and each
edge is examined a constant number of times. `O(min(m, n))` extra space for
the queue in the worst case: a diagonal island keeps the frontier short, and a
full grid keeps it no wider than the smaller dimension's front.
