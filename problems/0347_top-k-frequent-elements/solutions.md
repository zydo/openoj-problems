# Solutions — Top K Frequent Elements

## Frequency map with deterministic sort

The solution first counts occurrences of every element with a hash map in one pass. It then sorts the unique `(value, count)` items with the key `(-count, value)` and returns the values of the first `k` entries. The negated count makes higher frequencies come first, and the secondary key on the value itself breaks ties in ascending value order, which makes the output deterministic even when several elements share a frequency.

Sorting only the unique elements — at most `n` of them, and in this problem bounded by the value range of 2 * 10^4 + 1 — is what keeps the cost near-linear: the counting pass is `O(n)` and the sort is over the distinct values, not the raw array. This comfortably beats the required `O(n log n)` bound while remaining simpler than a bucket-by-frequency construction; the deterministic tie-break is precisely why a plain bucket walk (which would tie-break arbitrarily) is not used here.

Edge cases: a single-element array returns that element, and `k` is guaranteed to be at most the number of unique elements, so the slice never runs short. Equal frequencies are resolved by value as described, matching the judge's expected ordering.

**Complexity:** `O(n + u log u)` time (where `u` is the number of unique elements), `O(u)` space.
