# Solutions — Carpool Fuel to the Capital

## Subtree Sizes, One Ceiling per Edge

Every representative beginning inside a subtree must, sooner or later, cross
the single edge that separates that subtree from its parent — and each car
making that crossing burns a liter. So the fuel bill is a sum over edges of
the number of cars crossing, and the only question per edge is the densest
possible crossing: `s` people with `seats` seats per car can never squeeze
into fewer than `ceil(s / seats)` cars, and they can always achieve exactly
that by consolidating at a city before the crossing.

Root the tree at the capital and let `size[u]` count the representatives in
`u`'s subtree, `u` included. The edge upward from `u` carries exactly
`ceil(size[u] / seats)` cars — that many liters — and summing over every
non-root node answers the question. Consolidation deeper down cannot beat
this: whatever happens inside the subtree, its whole population still exits
through the one top edge, and nested subtrees account for their own edges
independently.

The code stays recursion-free for the `10^5`-node bound: one breadth-first
sweep from the capital records each node's parent and a visit order; walking
that order backwards processes children before parents, so `size[parent[u]]
+= size[u]` accumulates correctly while `(size[u] + seats - 1) // seats`
drops into the total — integer ceiling division, no floats. The capital's
own (nonexistent) edge is skipped, and the single-city network returns 0
straight away.

Each node and edge is handled a constant number of times, so the sweep is
linear. Even with one seat per car the total stays below `n` liters, well
inside plain integers.

**Complexity:** `O(n)` time, `O(n)` space.
