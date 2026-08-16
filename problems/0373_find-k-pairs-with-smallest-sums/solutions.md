# Solutions — Find K Pairs with Smallest Sums

## Min-heap over candidate pairs

The full cross product of `nums1` and `nums2` can hold 10^10 pairs, so only a frontier of candidates is ever materialized. Since both arrays are sorted, `(nums1[i], nums2[0])` is the smallest pair beginning with `nums1[i]`; the heap is seeded with these row-minima for the first `min(len(nums1), k)` indices (no pair beyond index `k` of `nums1` can be among the `k` smallest, because each already has at least `k` smaller-or-equal pairs ahead of it from earlier rows).

Each pop yields the globally smallest remaining pair, which is appended to the result. When `(i, j)` is consumed, the only unexplored pair that could be its successor within row `i` is `(i, j + 1)` — everything to its left in the row has already been popped, and everything else in the heap belongs to different rows. Pushing that one successor restores the invariant that the heap always contains the minimum un-emitted pair of every active row, so `k` pops produce exactly the `k` smallest pairs in order. The heap tuples `(sum, i, j)` compare by sum first and then by the `nums1` index, which matches the required tie-breaking: equal sums are emitted with the smaller `nums1` index first.

Edge cases: empty inputs or `k <= 0` return an empty list immediately, and the `j + 1 < len(nums2)` guard prevents pushing past the end of a row (the problem guarantees `k` never exceeds the total pair count, so the loop always fills `k` results). Heap size never exceeds its seeding size plus one push per pop, i.e. `O(k)`.

**Complexity:** `O(k log k)` time, `O(k)` space.
