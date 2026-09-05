# Solutions — Fewest Edges to Reach Every Node from a Source

## Contract the Cycles, Then Count the Leaks

Inside one maximal group of mutually reachable nodes, coverage is
all-or-nothing: if any node of the group is marked (or reached), every
node of the group is, because paths exist in both directions. That makes
the strongly connected components the natural units. Contracting them
turns the input into a DAG — built here with iterative Kosaraju, a
forward pass recording finish times and reverse-graph sweeps consuming
them in reverse order, both on explicit stacks so a `10⁵`-node graph
cannot blow the recursion limit.

On the DAG, mark the units containing marked nodes, then propagate
downstream with a BFS along contracted edges: everything reached that
way is already covered for free. What survives is a set of uncovered
units, and the leaks among them are the ones with no incoming unit at
all. A leak cannot be helped by any existing edge — nothing anywhere
upstream of it is covered — so each leak demands at least one new edge.
Conversely one new edge, drawn from any covered unit into a leak, covers
the leak and its entire downstream at once, which is at least as much
as aiming into a non-leak. Counting the uncovered leaks is therefore
both necessary and sufficient, and it is the answer.

Cross-unit edges are deduplicated while in-degrees are tallied, so
parallel edges between the same two units cannot distort which units
count as leaks. The `edgeFrom[i] != edgeTo[i]` guarantee rules out
self-loops, and an isolated node is simply a one-node unit that leaks
unless it is itself marked.

In the second worked input, the units are the cycle `{4, 6, 1}`, the
chains `{0} -> {3}` and `{2} -> {5}`: the two marked units cover their
chains, and the cycle unit has in-degree zero and no mark — one leak,
so one new edge, drawn from covered node `3` into node `1`. In the
first input the cycle already holds the mark and the two detached nodes
are separate leaks, giving two.

**Complexity:** `O(n + m)` time and space, for `m` existing edges.
