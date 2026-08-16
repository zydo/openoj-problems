# Solutions — Maximum Size Subarray Sum Equals k

## Prefix Sums with a First-Occurrence Hash Map

Every subarray sum is a difference of two prefix sums: the subarray `(j, i]` sums to `k` exactly when `acc(i) - acc(j) = k`, i.e. when the earlier prefix equals `acc(i) - k`. So the problem reduces to a single left-to-right sweep that, at each index, looks up whether the complementary prefix value has been seen and how long ago.

A running accumulator `acc` replaces any stored prefix array. A hash map `first` records the _earliest_ index at which each prefix value occurred, seeded with `{0: -1}` so a subarray starting at index 0 is found when `acc` itself equals `k`. Storing only the first occurrence is the maximization trick: among all valid left endpoints for the same prefix value, the earliest one yields the longest subarray `i - j`, so later duplicates are deliberately not overwritten.

At each index the lookup happens before the insertion, which keeps the length-0 subarray out of consideration (an element can pair only with strictly earlier prefixes). `best` tracks the maximum `i - j` seen, initialized to 0 so a `k` that never appears returns 0, as specified.

The map can hold up to `n + 1` distinct prefix values — negative numbers guarantee plenty of variety — and each step is one addition, one hash lookup, and at most one insert. Edge cases like the whole array summing to `k` (handled by the `{0: -1}` seed) and mixed-sign inputs fall out of the same arithmetic with no special handling.

**Complexity:** `O(n)` time, `O(n)` space.
