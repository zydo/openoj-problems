# Solutions — Fully Excavated Relics

A relic is recoverable exactly when every cell of its rectangle has been
cleared, so the whole problem is membership testing: which of the `digs`
cells fall inside each rectangle. The shape that answers that in constant
time per query is a marked grid.

## Mark the cleared cells, then verify each rectangle

First build an `n x n` boolean grid and set one flag per `digs` entry —
that is a single pass over the excavations. Then walk the relics: for each
rectangle `[r1, c1, r2, c2]` scan its cells and count the relic as
recoverable when none of the flags is unset. The statement caps every
relic at 4 cells, so each verification touches a constant number of flags,
and the relics are independent of one another — no overlap and unique digs
matter only to make the inputs well formed, not to the counting logic.

Rescanning `digs` for every relic cell instead would cost
`O(R · C · D)` in the worst case (relics × cells × digs), which is
millions of operations too many at the `10⁵` scale of the constraints. The
grid trades `O(n²)` memory — one byte-ish per cell, at most `10⁶` flags for
`n = 1000` — for `O(1)` lookups, bringing the total to
`O(n² + D + R)` time. Every value involved stays far inside 32-bit range:
coordinates are below `n <= 1000` and the answer is at most the relic
count, so no wider arithmetic is needed anywhere.

**Complexity:** `O(n² + D + R)` time, `O(n²)` space.
