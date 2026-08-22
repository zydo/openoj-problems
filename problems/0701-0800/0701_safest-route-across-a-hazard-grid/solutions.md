# Solutions — Safest Route Across a Hazard Grid

Both solutions rest on the same opening move: one multi-source BFS out of
every hazard at once fixes every cell's clearance, the lockstep wavefronts
reaching each cell along a shortest grid path. What differs is how the
corner-to-corner bottleneck is read out of that table. The binary search
leans on monotonicity — a route that survives one threshold survives any
lower one — and buys the answer with a logarithmic number of full-grid
reachability probes. The flood asks for no probes at all: cells walk in by
descending clearance, each uniting with its already-admitted neighbors, and
the moment the two corners land in one set, the clearance being admitted is
the answer.

## Multi-Source BFS with Binary Search

Every cell's clearance — its Manhattan distance to the nearest hazard — comes
out of one multi-source BFS launched from all hazard cells together. Because
the wavefronts expand in lockstep, the first wave to touch a cell has traveled
exactly its minimum grid distance, so the resulting `dist` table is the
clearance of each cell, computed for the whole grid at once.

A route's clearance is the minimum `dist` along it, so "some route achieves
clearance at least `v`" is the same question as "do the two corners stay
connected after deleting every cell with `dist < v`". That check is a plain
BFS out of `(0, 0)` over the surviving cells, bailing out early if either
corner is itself deleted. Connectivity of this kind is monotone in `v` — a
route that survives threshold `v` survives any smaller one — so the maximum
clearance is found by binary search over `[0, 2n]`, the widest distance an
`n x n` grid admits, keeping the largest threshold that still connects.

Edge cases need no special code: a hazard sitting on either corner pins its
`dist` at `0`, so no positive threshold ever connects and the search settles
on `0`. Both BFS passes cost time linear in the cell count, and the binary
search multiplies that by a logarithmic factor.

**Complexity:** `O(n² log n)` time, `O(n²)` space.

## Descending-Clearance Kruskal Flood

The same `dist` table feeds a very different extraction. All `n²` cells are
sorted by clearance, descending, and admitted in that order into a
disjoint-set union: the moment a cell walks in it is united with each
already-admitted 4-neighbor, so at every instant the sets hold exactly the
connected components of the cells cleared so far. Watching the admission
stream is watching the threshold sweep unfold — every threshold's surviving
subgrid appears as a prefix of the order.

The merger of the two corners can only be witnessed at a value the answer
actually reaches: every union joins two 4-adjacent admitted cells, all
carrying clearance at least the value being admitted, so united corners
certify a genuine route of at least that strength, and the sweep can never
overreport. It never runs past the answer either — the best route's
bottleneck, its lowest-clearance cell, is the last of that route to walk
in, and its admission fuses the route end to end. The first merger
therefore happens while the value being admitted is the answer itself, and
that value is returned on the spot. Edge cases need no special code: a
hazard on either corner pins that corner's clearance at `0`, so the merger
waits for the final admissions and reports `0`.

Sorting the `n²` cells is the whole bill beyond the BFS. The admission pass
touches every cell and every grid edge once, with path halving and union
by size keeping each disjoint-set operation effectively constant, and the
`dist` table, the admission order, and the two union arrays are each
proportional to the cell count.

**Complexity:** `O(n² log n)` time, `O(n²)` space.
