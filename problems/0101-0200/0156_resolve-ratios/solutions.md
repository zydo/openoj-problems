# Solutions — Resolve Ratios

## Weighted graph BFS

Build a graph whose vertices are the variable names. A stated ratio `a / b = v`
contributes the arrow `a -> b` labelled `v`, and — because flipping a quotient
inverts it — the arrow `b -> a` labelled `1 / v` as well. A query then stops
being arithmetic and becomes navigation: walk any route from `c` to `d`,
multiply the labels you cross, and the intermediate names cancel in pairs, so
what survives is precisely `c / d`.

![Two stated ratios, p / q = 4.0 and q / r = 0.5, drawn as arrows with their inverses; the dashed accent route multiplies 4.0 × 0.5 to answer p / r = 2.0.](figures/solution-division-graph.svg)

Each query gets its own breadth-first sweep out of `c`, every queue entry
carrying the product accumulated on the way to it. Expanding a vertex offers its
neighbours `product * label`, a `seen` set stops the sweep from circling (a
round trip contributes a factor of exactly 1 anyway), and the moment `d` turns up
as a neighbour the answer is returned. Consistency of the input is what licenses
stopping at the first route found: every route between two variables carries the
same product, so there is no better one to look for.

Two rejections happen before any traversal. If either name is absent from the
graph the answer is `-1.0`, which is also the right reply when an unknown name is
divided by itself; a name that is present divided by itself is `1.0` with no
arrows crossed. Otherwise, a sweep that exhausts the component holding `c`
without meeting `d` proves the two lie in unconnected groups — the situation of
`m / v` in Example 2 — and that query is `-1.0` too.

**Complexity:** `O(Q·(V + E))` time, where `Q` counts the queries, `V` the
distinct variables and `E` the stated ratios, and `O(V + E)` space.
