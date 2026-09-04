# Solutions — Soonest Tick To Stamp Every Slot I

## Binary search on last-chance deadlines

If every slot can be stamped within `t` ticks, the same schedule still works
for any longer horizon, so feasibility is monotone in `t` and binary search
applies. Optimal play never lowers a slot that is already zero or already
stamped: on an unstamped zero it makes the slot unstampable forever, and on
a stamped one it is strictly worse than idling. Under that normalization
every value stays non-negative and never rises, so a value that reaches zero
stays zero — which means any winning schedule can be rewritten to stamp each
slot at its **last** occurrence within `[1, t]`: moving a stamp later keeps
it legal, and two slots never share a last occurrence because each tick
names exactly one slot.

With stamp times pinned to last occurrences the check becomes pure counting.
Walk ticks `1..t` keeping `need`, the total lowering demanded by slots whose
deadline has already passed, and `marked`, how many stamps were placed. When
tick `s` is the last occurrence of slot `i` (a slot that never occurs makes
`t` infeasible), slot `i` must be stamped there, and its `nums[i]` lowerings
must all land in earlier ticks not spent on stamps; the prefix offers exactly
`s - marked` such ticks once this stamp is counted, so feasibility requires
`need + nums[i] <= s - marked` at every deadline. These prefix inequalities
are Hall's condition for assigning each lowering job a free tick before its
deadline: they are plainly necessary, and whenever they all hold, filling the
earliest free tick greedily constructs a valid schedule, so they are
sufficient too. The answer is the smallest `t` that passes, or `-1`.

**Complexity:** `O((n + m) log m)` time, `O(n)` space.
