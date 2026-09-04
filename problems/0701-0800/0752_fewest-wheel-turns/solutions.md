# Solutions — Fewest Wheel Turns

## Breadth-First Search

Treat the lock as an unweighted graph: 10,000 nodes, one per four-digit
reading, with an edge wherever one move converts one reading into the other —
eight neighbors per node, since each of the four wheels turns two ways and
wraps between `0` and `9`. The fewest moves to reach `target` is the shortest
path from `0000`, and breadth-first search finds exactly that: the queue
empties in order of move count, so the first appearance of the target is
unimprovable.

The deadends live in a set for constant-time lookups, and the search declines
to enqueue any of them, so no route ever crosses a jammed reading. The start
is inspected before anything else — a jammed `0000` means the wheels will
never turn, and the answer is `-1` on the spot. Readings join the seen set at
enqueue time, so each node enters the queue once, and the target test happens
on dequeue, returning the move count carried there. If the queue runs dry
first, then every neighbor of every reached node was already seen or jammed,
and the lock simply cannot be opened.

Each node expands at most once into eight constant-length neighbors, and both
the queue and the seen set are capped by the size of the reading space.

**Complexity:** `O(10⁴)` time, `O(10⁴)` space.
