# Solutions — Largest Skyline Rectangle

## Monotonic Stack

Any rectangle hiding under the skyline is capped by the shortest column it
covers, so there is no loss in restricting attention to one candidate per
column: the rectangle exactly as tall as that column, extended sideways as
far as the skyline allows. Its extension halts at the nearest strictly
shorter column in each direction, which makes the task look quadratic — but
both halting points can be delivered by a single sweep instead of per-column
rescans.

The sweep carries a stack of column indices whose heights are strictly
rising. A column at least as tall as the stack top cannot yet halt anything,
so it is pushed as-is. The instant a shorter column `h` arrives at index
`i`, every stacked column taller than `h` has found its right halting point:
`i` itself. Each is popped, its left halting point is whatever index remains
on top (or `-1`, when the rectangle runs back to the very start), and the
width `i - left - 1` times the popped height competes for the best area.

On `[3,1,4,2,2,5]` the interesting moment is the final flush. Appending a
sentinel column of height `0` (the code iterates `heights + [0]`) pops the
remaining stack in order: the `5` yields area 5, the trailing `2` yields 4,
and then the earlier `2` at position 3 is popped with left halting point at
position 1 — width `6 - 1 - 1 = 4`, area `8`, the winner. The sentinel,
shorter than everything, guarantees no column is left unevaluated, and it
can never claim an area of its own.

Each index enters the stack once and leaves at most once, so the apparently
nested popping adds up to linear time. Equal neighbors are deliberately left
on the stack (the comparison is strict): the earlier column of an equal pair
is the one that eventually collects the full width of the run, since its
left halting point is a strictly shorter column, never its equal twin.

**Complexity:** `O(n)` time, `O(n)` space.
