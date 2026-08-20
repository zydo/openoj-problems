# Solutions — Reach The Last Cell

## Greedy Farthest Reach

The branching search — from cell 0 try every move, from each of those try
every move — revisits the same cells endlessly. One observation collapses it:
moves may be shortened, so if any cell `j` is standable then so is every cell
below `j`. Standability is therefore not a set of cells but an interval
growing from the left, and the interval's right edge — call it `farthest` —
is the entire state. A cell `i` is standable exactly when `i <= farthest`.

The sweep keeps that one number. At each index, first the standability check:
an index past `farthest` means a gap opened that nothing can cross, and the
answer is `false` on the spot. Otherwise the value extends the edge to
`index + steps[index]` when that is further out, and the moment the edge
covers the final cell the answer is `true`, with no need to finish the sweep.

Order matters in that body. The gap check belongs before the update: in
`steps = [3,2,1,0,1]` the edge rises to 3 and stalls there, and it is the
check at index 4 — not the value at index 3 — that turns the stall into the
verdict. The early `true` exit is what handles `steps = [0]`: with
`farthest = 0` and a single cell, the edge already covers the last index
before any value is read.

For `steps = [3,1,2,0,4]`: cell 0 pushes the edge to 3, cell 1 (standable,
since 1 <= 3) pushes it to 4, which is the last cell — the sweep stops there,
after reading two values, even though the middle cells were never examined.

Two scalar variables carry the whole computation and each cell is read at most
once.

**Complexity:** `O(n)` time, `O(1)` space.
