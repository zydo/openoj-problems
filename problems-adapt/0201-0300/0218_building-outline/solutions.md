# Solutions — Building Outline

## Sweep Line with a Lazy Max-Heap

Directly above any x coordinate, the visible height is whichever standing
building is tallest there — nothing else matters. That reduces the task to
sweeping across the edges from left to right while keeping track of the
buildings currently overhead. Their heights sit in a max-heap keyed by
negated height, so the item on top is the height of the outline right now. A
permanent ground entry `(0, inf)` sits at the bottom, guaranteeing the top is
defined even at coordinates no building covers.

Every building supplies two events, one at each edge, and ordinary tuple
ordering quietly enforces all three tie-breaks that matter. Starts sort ahead
of ends at a shared x, so buildings that abut hand the outline over without a
false dip to the ground. Among starts, the taller sorts first, so the higher
silhouette gets recorded. Among ends, the shorter goes first, letting a tall
building stand until its own right edge arrives. Rather than digging ended
buildings out of the middle of the heap, the sweep discards them lazily:
before each event it pops any top entry whose right edge is already behind the
sweep. Stale entries buried lower do no damage and get thrown away if they
ever rise to the top.

Having pushed a start or popped the expired ends, the code reads the top of
the heap as the height in force and records `[x, height]` only when that
differs from the height it last recorded. That one comparison is what collapses
consecutive equal-height runs into a single run, exactly as the output format
requires. The closing point needs no special case either: after the final
building expires, the lazy popping uncovers the ground entry and a terminating
point at height `0` falls out naturally.

**Complexity:** `O(B log B)` time, `O(B)` space.
