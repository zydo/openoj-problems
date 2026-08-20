# Solutions — Fewest Fusions to Clear a Bar

## Min-heap simulation

Every fusion is obliged to consume the two smallest values present, so nothing
is ever scheduled or chosen — the entire run is determined by the starting
array. That turns the problem into bookkeeping: put the values in a min-heap,
then pop the two smallest `x <= y`, push `x * 2 + y` back, and count one
fusion.

The loop tests only the heap's top: once the minimum reaches `k`, every
element has, and it also halts when fewer than two elements remain. Each fusion
shrinks the array by one, capping the process at `n - 1` steps, and the fused
value strictly exceeds `y` (values are at least 1), so the minimum climbs and
the promised finish is reached. The pushed value is exactly the smaller pop
doubled plus the larger — heap order guarantees the first pop is the smaller,
so no explicit min/max is needed.

Tracing `[3, 1, 4, 15, 9]` against `k = 12`: `1` and `3` fuse into `5`, then
`4` and `5` into `13`, then `9` and `13` into `31`, after which the two
survivors `15` and `31` both clear the bar — three fusions.

**Complexity:** `O(n log n)` time, `O(n)` space.
