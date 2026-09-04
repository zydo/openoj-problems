# Solutions — Buildings Facing the Open Sea

A building sees the ocean exactly when it strictly exceeds every
building to its right — that is, when it exceeds the maximum of the
suffix that follows it. One number per building decides everything.

## Right-to-left running maximum

Sweep from the ocean inward carrying the tallest height seen so far,
seeded at 0 (no building to the right of the last one). Each building
that strictly tops the running maximum has an unobstructed view; it
then becomes the new maximum for everything further left. Equal
heights block — a building matching the suffix maximum does not see
over its twin. Indices are collected right-to-left and reversed once
at the end to satisfy the ascending order.

On `[2,7,4,9,5]` the sweep sees 5 (view), then 9 (view), then 4, 7,
and 2 all blocked by 9, yielding `[3,4]`. On `[6,6,3]` the rightmost
6 qualifies but its equal-height twin to the left does not — equal
heights block. Heights reach `10^9`, which
fits comfortably in 32 bits.

**Complexity:** `O(n)` time, `O(n)` space (output).
