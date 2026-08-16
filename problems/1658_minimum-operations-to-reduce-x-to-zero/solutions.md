# Solutions — Minimum Operations to Reduce X to Zero

## Sliding Window on the Middle Subarray

Removing elements only from the two ends and totaling exactly `x` is equivalent to keeping a contiguous middle subarray whose sum is `total - x`; the operations used are the elements outside it. Minimizing operations therefore means maximizing the length of a subarray summing to `target = total - x`, and the answer is `len(nums) - best`.

The elements are strictly positive, so the window sum is strictly increasing as the window grows — the classic shrink-when-too-large sliding window applies. Expand the right edge one element at a time; while the window sum exceeds `target`, advance the left edge. Whenever the sum equals `target`, record the window length as a candidate for the best. Because sums only grow with width, no candidate can be missed by never re-widening a shrunk window.

Two degenerate cases are handled up front: if `target < 0`, `x` exceeds the total sum and the result is -1; if `target == 0`, the middle subarray is empty and every element must be removed, giving `len(nums)` immediately. If no window ever hits `target`, the answer is -1.

**Complexity:** `O(n)` time, `O(1)` space.
