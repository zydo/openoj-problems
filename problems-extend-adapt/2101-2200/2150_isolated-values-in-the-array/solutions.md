# Solutions — Isolated Values in the Array

Isolation is a purely local property of a value `x`: it must occur exactly
once, and neither `x - 1` nor `x + 1` may occur at all. Hash lookups answer
both questions in constant time, which removes the quadratic rescan the naive
check would need.

## Frequency map, in-order scan

One pass builds a hash map from value to frequency; a second pass walks `nums`
in its original order and keeps every `x` whose count is 1 and whose two
neighbour keys are absent. Because an isolated value occurs exactly once, the
filter can admit it only at its single position — no deduplication is needed —
and the result comes out in first-occurrence order, matching the examples
(`[4,9,30]` from `[12,4,12,9,30]`). The map holds at most `n <= 10⁵` entries
with values in `0..10⁶`, comfortably inside 32-bit integers in every language,
and neither pass recurses, so stack depth is never a concern.

An input like `[8,2,3,8]` filters out both 2 and 3 (each sees a present
neighbour) and both 8s (count 3); an adjacent chain such as `[0,1,2]` keeps
nothing, since every value sees a neighbour. At the size bound the answer can
hold all `10⁵` elements, which the judge's output allowance covers.

**Complexity:** `O(n)` time, `O(n)` extra space.
