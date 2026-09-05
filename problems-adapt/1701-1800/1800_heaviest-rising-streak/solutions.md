# Solutions — Heaviest Rising Streak

Every value in `nums` is positive, so extending an ascending run can
only grow its sum: the best subarray ending at each index is the entire
strictly increasing run that ends there. The answer is the heaviest of
those runs, and one left-to-right sweep finds it.

## Running-reset sweep

Keep `cur`, the sum of the strictly increasing run that ends at the
current element. It extends the previous run whenever the current
element is strictly greater than its predecessor, and otherwise
restarts as the bare element — equal or smaller neighbours break the
run, and a lone element is itself a (trivially) ascending subarray.
`best` tracks the largest run sum seen; since every value is at least
1, no prefix of a run can outrank the whole run, so weighing each run
exactly once at its right end misses nothing.

On `[15,26,4,8,12]` the sweep holds 41 over `[15,26]`, resets at 4,
then only reaches 24 over `[4,8,12]`. On `[7,7,3]` the equal
neighbours force a restart at every step, so `best` never passes 7. With
`n <= 100` and `nums[i] <= 100` the naive product bound is `10^4`, and
strict ascent forces distinct values inside a run, so the true ceiling
is `1 + 2 + ... + 100 = 5050` — comfortably inside 32-bit integers and
exact as a JS `number` far below `2^53`.

**Complexity:** `O(n)` time, `O(1)` extra space.
