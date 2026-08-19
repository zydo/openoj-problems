# Solutions — Two-Colorable Graph

Two ways to answer the same question: try to paint the graph and watch for a
clash, or merge nodes that are forced onto the same side and check afterwards
that no edge ended up inside a merged block.

## dfs_color

A graph admits the required painting exactly when it contains no closed walk of
odd length. That is worth taking on trust for a moment and returning to at the
end; the algorithm falls out of it directly.

Give each node a slot in an array holding `0` for unpainted and `+1` / `-1` for
the two colours. Pick any unpainted node, paint it `+1`, and push it on a stack.
Repeatedly pop a node `u` and look at each `v` in its list. If `v` is still
unpainted, it has no choice but `-color[u]`, so paint it and push it. If `v`
carries `-color[u]` already, the edge is fine and there is nothing to do. If `v`
carries the very same colour as `u`, the painting cannot be completed and the
answer is `false`.

Colouring on the way in rather than on the way out is what keeps the stack
honest: a node is stamped the moment it is pushed, so it is never queued twice
and the loop visits each node once and each edge twice.

One walk only reaches the nodes connected to where it started, and the input
carries no promise of connectivity, so the outer loop restarts the whole
procedure from every node still holding `0`. Nodes with empty lists are painted
by that restart and clash with nothing.

Coming back to the claim: whenever a clash occurs at edge `(u, v)`, the paths
from the start node down to `u` and down to `v` plus that edge close a walk
whose length is odd, and an odd closed walk can never be painted in two
alternating colours. When no clash occurs the two colour classes are themselves
the two groups the problem asks for.

**Complexity:** `O(V + E)` time — one visit per node, two per edge — and
`O(V)` space for the colour array and the stack.

## union_find

Read the requirement from a node's point of view. Every neighbour of `u` must
end up opposite `u`, and therefore all of `u`'s neighbours must end up on one
and the same side as each other. That is a statement about _forced togetherness_,
which is what a disjoint-set structure records.

So sweep the nodes and, for each `u`, merge every entry of `graph[u]` into the
set of the first entry `graph[u][0]`. When the sweep finishes, each set collects
nodes that are compelled to share a side.

Now check the requirement itself. Run over every edge `(u, v)` and ask whether
the two ends landed in one set. If they did, some chain of forced-togetherness
constraints demands that `u` and `v` sit together while the edge between them
demands they sit apart — an odd closed walk in disguise — so return `false`.
Survive every edge and the sets are a legitimate two-sided split.

`find` does two passes: one to climb to the representative, and a second along
the same chain repointing each node straight at it. That second pass costs
nothing asymptotically and leaves the structure flatter for the queries that
follow.

**Complexity:** `O((V + E)·log V)` time — `O(V + E)` merge and lookup calls,
each amortised logarithmic and in practice near constant — and `O(V)` space for
the parent array.
