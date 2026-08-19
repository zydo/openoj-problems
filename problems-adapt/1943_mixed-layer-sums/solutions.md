# Solutions — Mixed Layer Sums

## Difference-Map Coordinate Sweep

The stacked total is constant along the line except where a pass begins or
ends, so each pass shrinks to a pair of difference events — `+color` at its
start, `-color` at its end — accumulated into a dictionary keyed by
coordinate. Sweeping those coordinates in order while carrying a running
total reconstructs the canvas: between one event coordinate and the next,
the set of live passes is fixed, and the running total is exactly the sum of
their colors.

Why a row per event coordinate is minimal, not merely valid: colors never
repeat across passes, so at any coordinate the additions and removals in
flight touch disjoint values and their net cannot be zero — the total really
moves. Two neighboring rows can still hold equal totals (Example 3 stacks
`{4,10}` and `{6,8}`, both totaling 14) yet must stay rows of their own,
because the stacks themselves differ; the sweep keeps them apart by
construction, cutting at every coordinate where anything changed.

The walk folds in `diff[keys[i]]` as it departs each coordinate, then
appends `[keys[i], keys[i+1], running]` only while the total stays positive.
That guard leaps over unpainted gaps — where no pass is live and the total
reads zero — and ignores the stretch beyond the final event. Sorting the
keys means the rows already emerge ordered by left endpoint, which is what
the judge asks for, and zero-width rows cannot appear because coincident
coordinates collapse into one dictionary key.

**Complexity:** `O(n log n)` time, `O(n)` space.
