# Solutions — Next Greater, Circular Array

## Circular Monotonic Stack

Letting an entry look past the end and continue from the front needs no copy
of the array: run `i` from `0` to `2n - 1` and read the entry at `idx = i % n`.
One bonus lap is always sufficient — the value that eventually settles a
waiting index sits no more than a full cycle ahead of it.

Inside that doubled run, the monotonic-stack discipline operates on indices,
not values, because each answer must land in its own slot. The stack carries
indices whose values descend weakly toward the top; whenever
`nums[stack[-1]] < nums[idx]`, the circular entry `nums[idx]` is the first
greater one ahead of each index popped, so `result[stack.pop()] = nums[idx]`.
Equal values stay put — "greater" is strict — which also prevents duplicate
entries from answering one another, as `[5, 5, 5]` shows: nothing ever pops,
and every slot keeps its `-1`.

Pushing happens only during the first lap (`i < n`); the second lap is purely
a resolution pass over the still-waiting indices, and whoever survives it
holds the `-1` the result array was seeded with. Take `[7, 4, 2]`: after the
first lap both 4 and 2 wait, and the second lap's opening 7 settles both —
the 2 correctly pairs with 7, because wrapping from the last slot reaches the
front before it reaches the 4. Each index is stacked at most once and popped
at most once across the whole `2n` run, so the nested-looking while loop is
still linear overall.

**Complexity:** `O(n)` time, `O(n)` space.
