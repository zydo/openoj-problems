# Solutions — 3Sum

## Sort, then two pointers

After sorting a copy of the array, fix the smallest element of a candidate triplet at index `i` and find the other two with a two-pointer scan over the suffix: `left` just after `i`, `right` at the end. If the total is below zero the sum must grow, so `left` moves right; if above zero, `right` moves left; on zero the triplet is recorded. Working on a sorted array means every emitted triplet `[nums[i], nums[left], nums[right]]` is already in ascending order, and scanning `i` left to right emits the triplets themselves in lexicographic order, as the statement asks.

Duplicate suppression falls out of the sorted order. Reusing the same value for the fixed element would re-find the same pairs, so `i` skips forward whenever `nums[i] == nums[i-1]`. After a hit, both pointers advance and then run past any runs of equal values, so the same pair is never emitted twice for one `i`. There is also an early exit: once `nums[i] * 3 > 0`, the smallest remaining value is already positive and no triplet from here on can sum to zero, so the loop breaks.

The `sorted(nums)` call builds a fresh list, leaving the caller's array untouched. Sorting costs `O(n log n)` and each of the `n` fixed positions does one linear two-pointer sweep, which dominates.

**Complexity:** `O(n^2)` time, `O(n)` space.
