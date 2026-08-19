# Solutions — Lift the Lowest Cell Score

## Binary search on the minimum, with a bouncing-sweep feasibility check

Deciding whether every cell total can reach `x` is monotone in `x` — the
walk that manages `x` manages anything below it — so the answer is a binary
search over `0..max(points) * m`, and all the real work sits in the
feasibility check.

The check uses a structural fact about optimal walks: because every
`points[i]` is positive, a walk with a long backtrack can be rearranged, at
no cost in steps, into one that sweeps left to right and only ever bounces
across a single boundary. Hoarding deposits next to where you already are
dominates deferring them: a detour made later visits the same cells no more
often and travels at least as far.

So the check sweeps `i` from `0` to `n - 1` holding `prev`, the deposits
already banked at `i` by the oscillation around the previous boundary. Cell
`i` needs `ceil(x / points[i])` deposits in total. With `remain` still
missing, the walker crosses the `i`/`i+1` boundary `remain` times — that
costs `2 * remain - 1` steps, the last crossing being the onward move — and
leaves `remain - 1` deposits banked at `i + 1`. When the quota is already
met, a single onward step suffices with nothing banked, and the last cell
needs no onward step at all. The target is feasible exactly when the
accumulated step count stays within `m`, and the sweep aborts the moment it
overflows.

Example 3 walks through the arithmetic: `points = [5,2,5]`, `m = 11`. For
`x = 10`, cell 0 needs `ceil(10/5) = 2` deposits — three steps, one banked
at cell 1; cell 1 needs `ceil(10/2) = 5`, minus the one banked, so four
more crossings at seven steps, banking three at cell 2; cell 2's quota of
two is already covered. Ten steps in total, one to spare. For `x = 12` the
middle cell alone demands six deposits and the outer cells three each, which
no eleven-step schedule delivers — confirming 10.

**Complexity:** `O(n log(max(points) * m))` time, `O(1)` working space.
