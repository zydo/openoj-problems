# Solutions — Smallest Peak After Leftward Shifts

## Prefix ceiling averages

A shift moves one unit from a cell to its left neighbour, so value only ever
travels leftward. That single fact pins the answer down. For any prefix
ending at index `i`, shifts can redistribute units freely inside the prefix
and can add inflow from the right, but no unit ever exits — so the largest
cell of that prefix is always at least the ceiling of its average,
`ceil(prefix_sum / (i + 1))`. The answer is therefore at least the maximum of
these prefix ceilings over all `i`. Longer prefixes can have larger ceilings,
and index 0 alone supplies the bound `nums[0]`, so every constraint is
captured.

The bound is also attainable. Sweep left to right, and whenever a prefix's
running total permits, use units arriving from the right to level earlier
cells up to the running target: each prefix balances exactly to its own
ceiling, and the settled target only grows as prefixes lengthen, so no later
leveling undoes an earlier one. The `[8,0,0]` case shows the bound cannot
shrink — no shift raises index 1 or 2's ability to absorb the leading 8,
since value refuses to travel right, and the answer is exactly `ceil(8/1)`.
The worked `[4,9,2,5]` case: prefix sums 4, 13, 15, 20 give ceilings 4, 7, 5,
5, and the maximum 7 is reached by parking two units of the 9 onto index 0,
yielding `[6,7,2,5]`.

The code is one pass accumulating `total` and tracking the largest
`(total + i) // (i + 1)` — integer arithmetic that rounds the prefix average
up with no floating point. Two scalars of state.

**Complexity:** `O(n)` time, `O(1)` space.
