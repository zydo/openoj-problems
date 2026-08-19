# Solutions — Alternating Color Distances

## BFS over (Node, Color) States

Distance here is not a property of a node alone: arriving on red forbids
leaving on red, so the same node can be the right place to be in one color
state and a dead end in the other. Doubling the state space absorbs the
constraint — a state is `(node, color of the edge just taken)`, moves from
a state follow only opposite-colored edges, and an ordinary breadth-first
sweep over the `2n` states finds shortest walks, since every move costs
exactly one edge.

Adjacency is kept in two per-color lists. The origin has no incoming edge,
so neither color state is privileged: the queue starts with `(0, red)` and
`(0, blue)` at distance 0, covering whichever color the first real edge
must contrast with. Popping `(node, color)` relaxes each neighbor over an
edge of color `1 - color`, writing its distance on first arrival — in a
BFS, first arrival is already optimal, so an unset (`INF`) slot doubles as
the visited flag. Self-loops land on an already-seen state and parallel
edges collapse into the same check; neither needs code of its own.

A node's answer is the minimum of its two state distances, updated as
states are first labelled; the origin is answered 0 up front, and anything
never labelled in either color keeps `-1`. In Example 3, node 3's only
in-edge continues a red run, so neither `(3, red)` nor `(3, blue)` is ever
reached and the `-1` survives; in Example 1 the chain red, blue, red
labels `(2, red)`, `(3, blue)`, `(1, red)` at distances 1, 2, 3.

Every edge is scanned from exactly one tail state and every state joins
the queue at most once.

**Complexity:** `O(n + E)` time, `O(n + E)` space, counting red and blue
edges together in `E`.
