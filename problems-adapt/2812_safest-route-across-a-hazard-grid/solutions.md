# Solutions — Safest Route Across a Hazard Grid

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
