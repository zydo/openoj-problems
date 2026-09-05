# Solutions — Best Average with Minimum Length

## Exact Per-Length Prefix Sums

Build prefix sums once. For a fixed length `L`, subtract prefixes `L` positions
apart to enumerate every window sum of that length, and retain the maximum.
Repeat for every `L` from `k` through `n`.

Comparing ratios with floating point at every step is unnecessary. If the
current candidate is `sum1 / length1` and the best is `sum2 / length2`, compare
`sum1 * length2` with `sum2 * length1`. Both lengths are positive, so this
integer comparison is exact even for negative sums. Divide only the final best
sum by its length.

Considering every allowed length and every starting position covers precisely
all valid subarrays. The prefix array supplies the only auxiliary storage.

**Complexity:** `O((n - k + 1)^2)` time and `O(n)` space.
