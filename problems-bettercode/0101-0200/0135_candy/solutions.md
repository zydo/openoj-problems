# Solutions — Candy

## Two-Pass Neighbor Sweep

Initialize every child with one candy, the minimum allowed. A left-to-right pass then enforces the left-neighbor rule: whenever `ratings[i] > ratings[i - 1]`, set `candies[i] = candies[i - 1] + 1`, the smallest value that both exceeds the left neighbor's allotment and respects everything already fixed in the prefix. After this pass, only right-neighbor violations can remain.

A right-to-left pass enforces the right-neighbor rule symmetrically: for `ratings[i] > ratings[i + 1]`, set `candies[i] = max(candies[i], candies[i + 1] + 1)`. The `max` is the crucial detail — it can only raise a count, never lower it, so the second pass's fixes cannot undo the first pass's left-neighbor guarantees. A child sitting on a rising-then-falling ridge ends up with one more than the length of the longer adjacent monotone run, exactly the minimum the two constraints force, so summing the array yields the least total candy.

Equal neighboring ratings impose no constraint — both comparisons are strict — which is why `[1,2,2]` distributes as 1, 2, 1 with the third child keeping a single candy. Every child retains at least the initial one candy, satisfying the lower bound throughout.

**Complexity:** `O(n)` time, `O(n)` space.
