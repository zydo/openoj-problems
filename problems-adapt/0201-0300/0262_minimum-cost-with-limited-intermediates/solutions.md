# Solutions — Minimum Cost with Limited Intermediates

Two implementations preserve the route-length budget explicitly.

## Round-Limited Relaxation

After `r` frozen Bellman-Ford rounds, each distance is the minimum cost using
at most `r` links. Initialize only `source` to zero, then perform
`maxIntermediates + 1` rounds. Every round copies the previous distances and
relaxes all links from that snapshot, preventing a route from gaining several
links in one round.

The final target distance is therefore the best legal route. Return `-1` if
it remains infinite. A round with no changes permits an early exit.

**Complexity:** `O(maxIntermediates * E)` time and `O(nodeCount)` space.

## Cost-Ordered Search with Link Count

Alternatively, place `(cost, node, linksUsed)` states in a min-heap. Do not
expand a state after it consumes `maxIntermediates + 1` links. The first target
state removed from the heap is optimal because costs are positive.

A dominance table records the fewest links used by an already expanded state
at each node. A later state using more links cannot offer a better continuation
budget and may be skipped.

**Complexity:** `O(E * maxIntermediates * log(E * maxIntermediates))` time and
`O(E * maxIntermediates)` space in the worst case.
