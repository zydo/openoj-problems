# Solutions — Strict Peak Profile

## One walk up, then down

A mountain has exactly one shape — a strict climb, one interior peak, a
strict fall — and that fixed shape lets a single index do all the work.
Start `i` at 0 and advance it while each element strictly beats its
predecessor: wherever that climb stops is the only place a peak could
possibly be, because everything before `i` rose into it. Two failures are
already decided at that moment. If `i` never moved the array never rose at
all, and if `i` reached the last index the climb consumed the whole array,
leaving the peak on an endpoint — Example 2's `[2,6,9]` climbs straight
into that trap.

Otherwise the candidate peak is interior, and the second half of the walk
checks the descent: advance `i` while each element strictly beats the next,
and a strict peak profile must land exactly on the last index. Both strictness
traps fall out of the comparisons. Equal neighbors stop whichever loop
meets them — Example 3's `[1,5,5,2]` climbs to the first 5 and then
stalls, since the second 5 is not smaller — and a second hill like the 4 in
`[1,5,3,4,2]` halts the descent early, leaving `i` short of the end.
Example 1's `[1,4,7,5,2]` passes both loops and lands on the final 2.

**Complexity:** `O(n)` time, `O(1)` space.
