# Solutions — Maximum Subarray

## Kadane's Algorithm

The key idea is to reduce the global question to a local one: for each index, what is the largest sum of a subarray ending exactly there? Call it `current`. Any optimal subarray ends somewhere, so the answer is the maximum of `current` over all indices. This local quantity has a one-step recurrence — the best subarray ending at `i` either extends the best one ending at `i-1` by `nums[i]`, or starts fresh at `nums[i]` — which is exactly what a single left-to-right scan can maintain.

The code seeds `best` and `current` with `nums[0]` (not `0`), which is what makes all-negative inputs come out right: the answer for `[-3, -1, -2]` is `-1`, an empty-prefix sum of `0` would wrongly win. For each subsequent value, if the running sum `current` has gone negative it can only drag down whatever follows, so the code drops it and restarts at `value`; otherwise it extends to `current + value`. Either way `best` is raised whenever the new running sum beats it.

Restarting on a negative prefix is the greed that makes this correct: a negative `current` contributes less to the future than an empty prefix does, so no optimal subarray extending past this point can include it. Both variables are plain scalars updated in one pass, with no dependence on the input size beyond the iteration itself.

Since every extension-or-restart decision is made from the running best and the current element alone, a single scan suffices — no sliding window, prefix array, or divide-and-conquer recurrence is needed.

**Complexity:** `O(n)` time, `O(1)` space.
