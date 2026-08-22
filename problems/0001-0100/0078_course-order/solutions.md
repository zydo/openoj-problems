# Solutions — Course Order

Each entry `[a, b]` is an arrow `b -> a`, and the wanted sequence lists each
course only after every course pointing into it — an arrangement the graph
admits exactly when it holds no loop. Two ways to produce it: walk the chains
depth-first and read the result off backwards, or peel the graph free end by
free end.

## dfs_cycle

The depth-first way assembles the sequence from the far end. A three-state
walk (untouched, on the current path, finished) follows each prerequisite
chain to its end, and a course joins a list exactly when it finishes — that
is, once everything downstream of it has already joined. Meeting a course
still on the current path means the chain folded back onto itself, and the
function returns the empty sequence at once.

The list that builds up is a finishing order, so it runs backwards: every
course sits after the courses it feeds. Reversing it turns that around — each
course lands before everything depending on it — giving the same kind of
sequence, assembled deepest-first instead of layer by layer. The walk keeps an
explicit stack of (course, next-arrow) frames, each resuming where it left off,
so a programme whose rules form one long chain cannot exhaust the call stack.

**Complexity:** `O(V + E)` time — every arrow advances one frame's index once.
`O(V)` extra for the states and the finishing order, plus the frames, which on
a chain-shaped programme can hold one per course.

## kahn

The peel produces one, or proves none exists, by repeatedly emitting a course
whose incoming arrows have all been emitted already; that is precisely what
makes a course legal to take next.

The code builds an adjacency list and a count of unfinished predecessors per
course, then seeds a queue with every course at zero. Each course leaving the
queue is appended to the sequence, and its arrows are consumed by decrementing
the counts of the courses it feeds; anything that falls to zero becomes
available and joins. Emitting strictly in this order is what guarantees every
course lands after its predecessors, and the freedom to choose among the
available courses is why several legal sequences exist — in example 2, after 0
the peel may take 2 or 3.

![The prerequisite graph of example 2 (0 -> 2, 0 -> 3, 2 -> 1, 3 -> 1) with each course's incoming-arrow count, and the four peeling steps that drain the queue into the order [0, 2, 3, 1].](figures/solution-kahn-peeling.svg)

A loop never drains: the courses on it keep positive counts forever and never
reach the queue, so the sequence ends up short of `courseCount`, and the
function returns the empty sequence rather than a partial answer. When the
queue empties with every course emitted, the collected sequence is complete.

**Complexity:** `O(V + E)` time, `O(V + E)` space.
