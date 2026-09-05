# Solutions — Shortest Coin-Gathering Round Trip

## Iterative Leaf Pruning

Two pruning phases shrink the tree to exactly the vertices the tour must
enter. First, repeatedly delete coinless leaves: stepping onto a leaf with
no coin accomplishes nothing, and deleting one can expose another useless
leaf, so the removals cascade like a topological sort until every remaining
leaf holds a coin.

Second, because a sweep reaches two edges out, a walk never needs to descend
into the last two layers of the coin-bearing tree. Two more rounds of leaf
deletion — this time dropping leaves regardless of coins — strip those
layers, and within each round the deletions again cascade, since earlier
removals create fresh leaves.

Whatever survives is the minimal subtree the tour must traverse. A closed
walk over a subtree with `r` vertices crosses each of its `r - 1` edges
exactly twice — out and back — so the answer is `(r - 1) * 2`. The
`max(0, ...)` clamp covers fully pruned inputs: a lone vertex, or coins all
within distance 2 of one spot, leaves `r` at 0 or 1 and needs no movement.

Worked on Example 3: node 13 dies in phase 1 (coinless leaf), the three arm
ends 4, 8 and 12 go in the first stripping round, their inward neighbours
3, 7 and 11 in the second. Seven vertices survive — 0, 1, 2, 5, 6, 9 and
10 — six edges, each crossed twice, for 12.

**Complexity:** `O(n)` time, `O(n)` space.
