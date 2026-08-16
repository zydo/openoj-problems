# Solutions — Kth Largest Element in an Array

## Min-Heap of Size k

A min-heap of exactly `k` elements always keeps the `k` largest values seen so far, with the smallest of them — the current kth largest — at the root. The solution delegates to `heapq.nlargest(k, nums)`, which implements precisely this: it streams the array once, pushing elements onto a heap of size `k` and popping the minimum whenever the heap would exceed `k` elements.

Each of the `n` elements triggers at most one heap push and pop on a heap of size at most `k`, so the cost per element is logarithmic in `k`, not in `n`. The returned list holds the `k` largest values in descending order, so its last element `[-1]` is the smallest of the top `k` — the kth largest by rank, with duplicates counted, exactly as the problem defines it.

This avoids fully sorting the array at `O(n log n)`; when `k` is small relative to `n` the heap rarely turns over and the pass is nearly linear. The edge case `k = n` degenerates to holding every element, with the root being the array minimum, which is still the correct answer.

**Complexity:** `O(n log k)` time, `O(k)` space.
