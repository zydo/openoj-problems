# Solutions — Least Weight Cap for Reaching Node Zero

## Binary search on the cap with reversed reachability

Flip the direction of every edge and the demand "every node can travel to
node `0`" turns into "node `0` can travel to every node" — an ordinary
single-source reachability question. The cap is monotone in the bargain: when
keeping only edges of weight at most `x` already lets `0` reach everyone, any
looser cap does too. So binary search the cap over `[0, maxw]`, each test
being a stack-based sweep from node `0` over reversed edges with `w <= limit`
that counts what it visited; the first feasible limit is the answer. If even
`maxw` fails, the graph as a whole leaves some node stranded and the result
is `-1`.

The outgoing-edge cap never decides anything, and ignoring it is sound. Any
successful sweep certifies reachability with a traversal tree in which every
non-root node keeps exactly one outgoing edge — the one toward its parent —
and the root keeps none; with `threshold >= 1` that tree already respects the
cap, so feasibility is purely a connectivity question.

One detail worth attention: the test compares `w <= limit` against weights up
to `10⁶`, so the search makes roughly twenty descents, each an `O(n + m)`
traversal. Parallel edges between the same pair of nodes (with distinct
weights) do no harm — the extra branches are genuine directed paths, so they
can only reveal reachability that really exists.

Worked on example 1 (`threshold = 2`): with the cap at `3`, node `2` is
stranded, since its only light escape is `2 -> 1` of weight `4`; at `4` the
reversed sweep from `0` reaches `1`, then `2`, then `3` and `4`, so the
answer is `4` — and the weight-`5` edge `2 -> 0` is exactly what the optimum
discards.

Edge behaviour: node `0` counts as visited before the sweep starts; a node
with no outgoing edge at all (example 4) makes even `maxw` infeasible; and
since every weight is at least `1`, a cap of `0` isolates node `0` whenever
`n >= 2`, so the search never returns `0` — all of this falls out of the same
uniform loop.

**Complexity:** `O((n + m) log W)` time, `O(n + m)` space, for `W` the largest
edge weight.
