# Solutions — Non-Adjacent Loot Under a Cap

## Binary search on the cap with a greedy sweep

Minimizing a maximum suggests searching over the maximum itself. Fix a cap `c` and ask whether some legal selection of `k` or more positions keeps every chosen value at or below `c`. That question is monotone in `c`: a selection that respects `c` respects anything larger, so feasibility can only improve as `c` grows. The answer is therefore the smallest feasible `c`, and since a cap only matters where a value sits, the search can run over the raw value range `[min(nums), max(nums)]` with the lower-mid split that a minimization calls for — `nums` never needs sorting.

The sweep that tests one cap reads the array once. March from the left: when the current position's value is at most `c`, count it and jump two places forward (its neighbour is now barred); otherwise move one place forward. Taking an eligible position dominates passing over it — passing forfeits a pick outright and opens up no opportunity that taking would have closed, because both moves leave the sweep at or beyond the next position — so the count produced is the largest number of non-adjacent under-cap positions the array offers. Comparing that count with `k` settles feasibility.

Take `nums = [5,1,4,2,8,3]` with `k = 3`. Under `c = 2` the sweep counts positions 1 and 3 and stops at 2 — infeasible. Under `c = 3` it counts 1, 3 and 5 for exactly 3 — feasible, and since 2 failed, the smallest cap is 3.

The bound `k <= (n + 1) / 2` guarantees that positions 0, 2, 4, … already supply `k` non-adjacent slots, so the largest value in the array is always a feasible cap and the search converges to a real answer rather than running off the range. Each test is a single pass, and values fit in 32 bits, so the search needs about 30 passes.

**Complexity:** `O(n log(max(nums) - min(nums)))` time, `O(1)` extra space.
