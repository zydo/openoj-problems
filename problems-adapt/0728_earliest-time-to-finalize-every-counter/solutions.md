# Solutions — Earliest Time to Finalize Every Counter

## Binary search with a backward greedy feasibility check

Feasibility is monotone in the deadline — counters finalizable within `t`
seconds are finalizable within any larger `t` — so the method binary-searches
the smallest workable `t` over `[lo, m]` and answers -1 when even `m` fails.
Absent zeroings, a full schedule costs `sum(nums) + n` seconds: one knock per
unit plus one finalization per counter. A zeroing buys out all of one
counter's knocks, and the check decides greedily which zeroings to buy.

`check(t)` walks the seconds from `t-1` down to 0. Only a counter's first
appearance in `resets` is worth zeroing (later appearances of the same counter
add nothing), so every other second is spare capacity, tallied in `cnt`. At
each first appearance the check tentatively buys: `nums[idx]` goes onto a
min-heap of savings and one spare second is reserved for that counter's
finalization (`cnt -= 1`). When no spare second is free, the least profitable
purchase so far is cancelled — pop the heap minimum — returning that counter
to knock-by-knock handling while freeing a second net (`cnt += 1`). Walking
backwards is what keeps every reserved finalization after its zeroing.

Once the walk ends, the heap holds exactly the zeroed counters, whose residual
cost of two seconds apiece is already paid by their appearance second plus
their reserved finalization. Everything else still owes knocks plus a
finalization — `total - (sum(heap) + len(heap))` — and the deadline works iff
that fits in the leftover `cnt`. The search's lower bound starts from one
second per appearing counter (or `nums[i] + 1` for counters that never appear
and cannot be zeroed) plus the `n` finalizations, which prunes hopeless
deadlines early. In the second worked example (`[1, 2]` with
`resets = [2,2,2,2,2,2]`), counter 1 never appears, so its two seconds are
forced and only counter 2's zeroing is negotiable; the earliest deadline
holding all four seconds is 4.

**Complexity:** `O(m log m log n)` time, `O(n)` space.
