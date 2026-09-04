# Solutions — Round Table Favorites

## Functional Graph Cycles and Chain Depths

Everyone points at exactly one favorite, so `favorite` draws a functional
graph: disjoint cycles with trees draining into them. A legal seating comes
in exactly two shapes. Shape one is a whole cycle of length ≥ 3 — every
member's favorite is a cycle neighbor, both seats beside each member belong
to the cycle, and no outsider fits anywhere. Shape two anchors on a mutual
pair: the two sit together, the seat beyond each of them takes one chain of
employees leading into the pair, and — because a round table absorbs any
number of disconnected arcs — every mutual pair in the company can bring its
chains to the same table. The answer is the larger of the best single cycle
and the sum over all mutual pairs.

The chains need depths. Count incoming arrows and repeatedly lift every
employee nobody points at, relaxing `depth[favorite[u]]` to the best of
itself and `depth[u] + 1`; after the peel, `depth[v]` counts the employees on
the longest chain hanging directly off `v`, itself included.

![The example favorite = [1, 0, 1, 1] seated around the table: the mutual pair 0 and 1 sits together, node 2 takes the free seat beside 1, and employee 3 — who also favorites 1 — is left out because both neighboring seats are taken, giving depth[0] + depth[1] = 3.](figures/solution-two-cycle-table.svg)

Whoever survives the peel with an unlifted incoming arrow is on a cycle.
Following `favorite` around each unvisited cycle measures it: a length-2 cycle
pays `depth[i] + depth[favorite[i]]` into the pair total — both chains, one
per side — while anything longer only challenges the best single cycle.
Comparing the two totals settles it. Both phases touch each employee a
constant number of times.

**Complexity:** `O(n)` time, `O(n)` space.
