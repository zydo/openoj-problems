# Solutions — Number of Valid Subarrays

## Monotonic Stack (Next Strictly Smaller Element)

A subarray starting at index i is valid exactly while every element stays ≥ nums[i], so it breaks precisely at the first index to the right holding a value strictly smaller than nums[i]. Counting valid subarrays is therefore a sum of "distance to next strictly smaller element" over all starts — a quantity a monotonic stack computes for every index in one pass.

The stack holds indices whose next-smaller element has not yet been seen, and it is kept strictly increasing in value from bottom to top. Scanning left to right, when the current value is strictly smaller than the value at the stack top, that top index j has just met its next-smaller element at position i: it is popped and contributes i − j valid subarrays (the runs [j..j] through [j..i−1]). Equal values stay on the stack, matching the "not larger than" wording — a later duplicate can extend past an earlier one only when a strictly smaller value arrives to settle both. A sentinel pass with the value −1 after the last index flushes every remaining index against the virtual boundary n.

Each index is pushed once and popped once, so the whole computation is linear. Edge cases: a strictly decreasing array pops everything immediately and yields exactly n; an all-equal array keeps everything on the stack until the sentinel, giving n(n+1)/2.

**Complexity:** `O(n)` time, `O(n)` space.
