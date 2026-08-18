# Solutions — Convex Fence

## Monotone Chain Hull with Boundary Recovery

The wanted set is the convex hull's boundary, with one twist worth naming
before writing code: a point resting in the middle of a hull edge is on the
boundary just as much as a corner is. So the computation runs in two phases —
first the strict corner set via Andrew's monotone chain, then a sweep of the
hull edges that re-admits every input point lying on one.

After deduplication and sorting, two stack passes build the chains: walking the
sorted points forward builds the lower chain, walking them reversed builds the
upper, and each pass pops while its top three points make a non-left turn
(`cross <= 0`). Those pops are what discard mid-edge collinear points and
reflex dents, leaving only strict corners. Splicing the chains together with
the duplicated endpoints removed walks the hull counter-clockwise.

The recovery pass then visits every hull edge `(a, b)` and tests each point not
yet collected: a zero cross product against `(a, b)`, together with lying
inside the edge's coordinate bounds, places the point on the closed segment,
and it is appended. A set of already-collected points keeps a point shared by
two adjacent edges from being taken twice. Degenerate inputs need no special
casing — one point returns itself, and fully collinear input collapses the hull
to a two-vertex segment whose single edge then absorbs all the other points.

Tracing the first example,
`positions = [[1,1],[5,1],[5,5],[1,5],[3,3],[2,1]]`: the chains retain exactly
the four corners, `(3,3)` never survives a pop-free path, and `(2,1)` — zero
cross with the bottom edge `(1,1)–(5,1)` and within its bounds — is appended
after them by the recovery pass.

Sorting dominates the hull construction, and the recovery pass pairs every
point with every hull edge, so a hull with many vertices over scattered points
is the worst case.

**Complexity:** `O(P log P + H · P)` time, `O(P)` space, for `P` input points
and `H` hull vertices.
