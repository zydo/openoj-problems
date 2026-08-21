# Solutions — Count Grid Islands, Land Updates

## Union-Find with Path Compression and Union by Size

Recounting after every update means one full grid scan per entry of
`positions`, which is the obvious plan and the one to refuse. The alternative
carries a single number forward over a union-find (disjoint set) structure
indexed by flattened cell id `r * n + c`: filling a cell creates one island,
and every *distinct* island that cell touches edge-to-edge then disappears
into the merge.

Each update begins with the `land` flags. A cell already land leaves
everything as it was, so the running count is appended again — the same guard
that keeps a position repeated several times from ever counting twice. A fresh
cell is marked, the count rises by one, and its four edge neighbours are
considered in turn: the root of each land neighbour is compared with the new
cell's root, and a difference means two islands just became one, so the sets
are unioned and the count falls back by one. Two neighbours sitting on the
*same* island are why roots rather than neighbour counts are compared: after
the first merge, the second `find` returns the root just created, the roots
match, and no second decrement is taken.

In example 1 the fourth update touches `(0, 0)` and `(1, 1)`, until then the
centres of two different islands; one increment, two merges, and the count
moves 3 → 2. In example 2 the final update touches `(0, 0)` and `(1, 1)`
likewise, and the count moves 2 → 1.

Two standard refinements keep `find` cheap under a long run of updates. Path
halving — `parent[x] = parent[parent[x]]` while walking upward — splices each
visited cell onto its grandparent, flattening the chains it traverses, and
union by size hangs the smaller tree beneath the larger so no tree grows tall.
The amortized cost per operation is then effectively constant (inverse
Ackermann in the formal bound), which meets the follow-up's `O(k log(mn))`
with room to spare.

The arrays cover all `m · n` cells from the start, whether or not the updates
ever reach them — memory traded for never resizing. Neighbour coordinates are
range-checked before use, so corner and edge cells need no special handling.

**Complexity:** `O(k · α(m·n))` time, `O(m·n)` space.
