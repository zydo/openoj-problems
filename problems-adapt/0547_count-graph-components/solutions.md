# Solutions — Count Graph Components

## dfs

Counting components has a canonical shape: walk the nodes `0` to `n - 1`,
and whenever a node turns up that no earlier walk reached, a new component
begins there — add one to the count and traverse everything reachable from
it. Every traversal swallows exactly one whole component and every node is
swallowed exactly once, so the number of traversals launched is the answer.

The traversal here is a depth-first walk held on an explicit stack, which
sidesteps recursion-depth limits entirely. Popping a node scans its full
row of `adjacency`; each still-unvisited neighbour marked `1` is marked
visited and pushed. Marking at push time rather than pop time keeps a node
from ever being stacked twice, so each node pops once and each row is
scanned once over the whole run — the quadratic total is the
adjacency-matrix format itself, where reading one node's neighbours is a
linear scan. The unit diagonal and the symmetry are harmless: a
self-entry finds the node already visited, and edges seen from both ends
identify components by visitation, never by counting edges twice.

On the first example the sweep finds node `0` unvisited, launches from it,
and — its row is empty of `1`s beyond the diagonal — immediately closes
the first component. Node `1` starts the second launch, which pulls in
node `2` through their shared entry and finishes the count at 2.

**Complexity:** `O(n²)` time, `O(n)` space — the stack can hold an entire
component in the worst case.

## bfs

The same outer sweep with a different frontier discipline: a FIFO queue.
An unvisited node still opens a new component, but the flood now spreads
in waves — the seed comes out, its adjacency row is scanned, and every
unvisited neighbour is marked and enqueued — so all nodes `d` hops from
the seed are expanded before any node at `d + 1`. The queue drains exactly
when the component is exhausted, and the sweep resumes hunting for the
next unvisited node.

Marking happens on entry to the queue, not on exit, so no node can be
enqueued twice; each node leaves the queue once and its row is read once,
exactly as in the depth-first version. The wave ordering has no effect on
the count — visitation alone decides component membership — so the two
variants agree on every input and differ only in the order nodes are
discovered.

**Complexity:** `O(n²)` time, `O(n)` space — the queue can hold a whole
component's frontier in the worst case.

## union_find

Rather than traversing, grow components by merging. Every node begins as
its own set, and each edge — a pair with `adjacency[i][j] == 1` and
`i < j` — is offered to a disjoint-set union: if the two endpoints have
different roots the edge genuinely joins two sets, one root is glued under
the other, and the count drops by one; if they already share a root the
edge was redundant and nothing changes. Symmetry means scanning pairs with
`i < j` feeds every edge to the union exactly once while skipping the
diagonal.

The parent array implements the union-find with path-halving —
`parent[x] = parent[parent[x]]` splices every other node on a root walk
directly under its grandparent, flattening the structure as it goes so
repeated finds keep getting cheaper. When every pair has been consumed,
the surviving count is the number of components — no visited array, no
traversal at all. On the hub example, the hub's three edges each merge a
singleton under it, taking the count from 4 down to 1.

**Complexity:** `O(n² · α(n))` time — every matrix pair is inspected once
and each union costs near-constant amortized time under compression —
with `O(n)` space for the parent array.
