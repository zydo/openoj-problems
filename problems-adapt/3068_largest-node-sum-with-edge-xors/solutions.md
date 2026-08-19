# Solutions — Largest Node Sum With Edge XORs

## Even-flip parity greedy

Whether a node's value has been XORed with `k` depends only on the parity of
the operations touching it, and one operation flips the parity of exactly its
two endpoints. So the reachable end states are described by sets of flipped
nodes of even size — at least on a connected tree: pair the chosen nodes up
arbitrarily and operate along the path joining each pair; interior nodes
toggle twice and return to themselves. The edge list therefore matters only as
a certificate of connectivity.

What remains is a choice of even-sized flip set maximizing the total. A node
worth flipping contributes its delta `(x XOR k) - x`, so the unconstrained
optimum flips exactly the positive deltas, giving
`sum(nums) + sum(positive deltas)`.

When the positive deltas number oddly, one correction is forced: give back the
smallest positive gain, or take on the least-negative non-positive delta —
whichever penalty is smaller. A delta of exactly zero, when present, is a free
correction. `n >= 2` guarantees a partner exists whenever any flip is
worthwhile.

Worked on the first example (`[2, 7, 2]`, `k = 5`): the deltas are `+5, -5,
+5`; the two positives form an even set, realized by one operation on the edge
between nodes 0 and 2, and the sum climbs from 11 to 21. In the third example
(`[7, 7, 7, 7]`, `k = 1`) every delta is -1, so the empty set wins and the
tree is left untouched.

**Complexity:** `O(n)` time, `O(1)` extra space.
