# Solutions — Search in Rotated Sorted Array

## Modified binary search on the sorted half

A rotated sorted array with distinct values has one property binary search can still ride on: inside any window `[lo, hi]`, the midpoint splits the window into two halves and **at least one of them is properly sorted**. Compare `nums[lo] <= nums[mid]` to find which — the `<=` matters for the degenerate case where the window is so small that `lo` and `mid` coincide, and for an unrotated array the test simply always picks the left half.

Once the sorted half is identified, its value range is exactly known (`nums[lo]..nums[mid]` or `nums[mid]..nums[hi]`), so a single containment test decides whether `target` can live there: if it does, keep that half; if not, the target — if present at all — must be in the other half. Each step halves the window; the loop ends when the target is found or the window empties (`-1`). Because all values are distinct, the range tests never straddle the rotation point ambiguously.

The window halves every iteration and only a handful of index variables are kept.

**Complexity:** `O(log n)` time, `O(1)` space.
