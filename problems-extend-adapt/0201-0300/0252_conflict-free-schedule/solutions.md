# Solutions — Conflict-Free Schedule

## Sort by start, one pass

Whether two slots clash is a local question, but the input hands them
over in arbitrary order. Sorting by start time lays the slots along the
timeline, and once they're in that order any overlap must surface
between neighboring slots: a slot can only clash with one that starts
before it ends, and after sorting those are exactly its neighbors. The
sort does all the global work; what remains is one comparison per
adjacent pair.

The pass asks a single strict question of each neighboring pair: does
the earlier slot end strictly after the later one starts? A shared
boundary point doesn't count — the statement is explicit that a slot
ending at time `t` and one starting at `t` don't overlap — so equality
passes. The first strict violation settles the answer `false` on the
spot, because two slots already occupying the same moment can never be
booked together no matter what the rest of the schedule looks like.

An empty array, or a single slot, leaves the loop with no pair to check
and the answer is `true`. Equal start times need no special handling:
each slot ends strictly after its own start, so two slots sharing a
start always fail the strict test in one order or the other, and nested
slots fail it the same way — the inner one starts before the outer one
ends.

**Complexity:** `O(n log n)` time, `O(1)` space.
