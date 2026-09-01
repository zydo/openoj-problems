# Solutions — Minimum Positive Start

## Minimum prefix sum

After the first `k` elements the running total is `startValue` plus the
prefix sum `nums[0] + ... + nums[k-1]`, so the constraint "never less
than 1" binds at exactly one place: where that prefix sum is smallest.
Let `minPrefix` be the minimum over all prefixes. The requirement is
`startValue + minPrefix >= 1`, i.e. `startValue >= 1 - minPrefix`.

The remaining detail is positivity: `startValue` must be at least 1
regardless. When every prefix sum is positive (`minPrefix >= 1`), the
inequality allows anything down to `1 - minPrefix <= 0`, and clamping to
1 gives the true minimum. Both branches reduce to
`max(1, 1 - minPrefix)`.

One pass computes the running prefix sum while tracking its minimum —
for `[2, -5, 3, -1]` the prefix sums are `2, -3, 0, -1`, the
minimum is `-3`, and the answer is `1 - (-3) = 4`. The values are tiny
(at most 100 elements of magnitude at most 100), so no overflow concerns
arise in any language.

**Complexity:** `O(n)` time, `O(1)` space.
