# Solutions — Sliding Window Maximum

## Monotonic Deque

A deque of indices, kept in strictly-itemized decreasing order of their values, gives the window maximum in O(1): the front of the deque is always the largest element still inside the window. The invariant is maintained by discarding elements that can never again be a maximum — an element that is older _and_ smaller than a newly arriving one is dominated forever, since any future window containing the new element also excludes the old one no later.

Concretely, for each index `i` the code pops indices from the back of the deque while their values are less than or equal to `nums[i]` (using `<=` also collapses duplicate values, keeping only the most recent), then appends `i`. Staleness is checked at the front: if the front's index has slid out of the window (`dq[0] <= i - k`), it is popped from the left. Once `i` reaches `k - 1`, the window is full and `nums[dq[0]]` is emitted for every subsequent position.

![Deque states over [1,3,-1,-3,5,3,6,7] with k = 3: the deque holds 3,-1,-3 until 5 arrives and evicts all three; later 6 and 7 each evict everything older and smaller, producing outputs 3, 3, 5, 5, 6, 7.](figures/solution-monotonic-deque.svg)

Each index enters the deque exactly once and leaves at most once, from one end or the other, so the total work across all `n` elements is linear despite the nested `while` loop. The deque never holds more than `k` indices, and the result has `n - k + 1` entries. This beats both the naive O(n·k) rescan and per-window heaps, whose lazy deletion makes them O(n log n).

**Complexity:** `O(n)` time, `O(k)` space.
