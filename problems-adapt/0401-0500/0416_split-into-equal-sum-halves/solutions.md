# Solutions — Split Into Equal-Sum Halves

## Bitset Subset-Sum DP

An odd total ends the discussion at once: two equal integer halves are then
impossible. Otherwise the whole question condenses to one subset-sum decision —
can some selection of the elements add up to `target = total / 2`? Whoever
finds such a selection has one group, and the untouched remainder must sum to
`target` as well, settling the other group for free.

Reachability of sums is tracked with a single integer worn as a bitmask: bit
`s` stands exactly when some selection among the elements processed so far sums
to `s`. Folding in a new element of value `v` is the shift-or `mask | (mask << v)`
— each sum already reachable spawns `s + v`, and untouched bits stay put. The
shifted copy derives purely from pre-update bits, so the element contributes at
most once; this is precisely the descending-order update of a 0/1 knapsack
table, executed as one word-parallel operation instead of a loop.

Sums past `target` can never come back down — values are positive — so a
`keep = (1 << (target + 1)) - 1` masking lops them off and keeps the integer
from growing without purpose. After each element, bit `target` is inspected and
the method returns the moment it lights up; that check also settles the happy
accident of a single element equal to the whole target. A final look after the
loop keeps the function total for arrays the loop never entered.

Trace `[3,1,7,3,2]`, whose total of 16 sets `target = 8`: the mask begins
holding only `{0}`, takes in `{3}` after the first element, then
`{0,1,3,4}` after the second. The third element, 7, spawns `7` and `8` from 0
and 1 — bit 8 is set, and the method returns `true` on the spot: the selection
`7 + 1` is one half, `3 + 3 + 2` the other. Contrast `[2,2,2,12]`: every
reachable sum is even from start to finish, so the odd target 9 never appears
and the sweep ends `false`.

**Complexity:** `O(n * target / 64)` time (`n` big-int shift/or passes over
`target + 1` bits), `O(target)` space.
