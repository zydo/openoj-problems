# Solutions — Marking Spread Times on a Tree

## Rerooting dynamic programming

Crossing an edge into `v` spends one unit of time when `v` is odd and two
when it is even, so `times[i]` — the moment everything is marked with `i` as
the hand-marked origin — is exactly the weighted height of the tree rooted at
`i`. Taking a fresh rooted height per origin costs quadratic time, so the
answer is computed once and then slid across every edge: the classic
rerooting move.

The pass structure is two sweeps over an iterative DFS ordering rooted at
`0` (explicit stack, no recursion limits). Bottom-up, each node `u` records
`last[u]`, the latest marking time inside `u`' subtree, as the maximum over
children `v` of `last[v]` plus `v`'s entry cost; for the reroot it also
remembers which child supplied that maximum (`last_no`) and the runner-up
value (`second`), because when the answer travels back down through the
champion child, `u` must offer that child its second-best branch instead of
a path that doubles back through it.

Top-down, `up[v]` carries the latest marking time strictly outside `v`'s
subtree: entering `u` from above costs one or two by `u`'s parity, on top of
the larger of `up[u]` and the downward value `u` can spare for `v`. The
answer at each node is the bigger of its inward and outward values — the last
node to be marked necessarily sits on one side or the other of that split.

**Complexity:** `O(n)` time, `O(n)` space.
