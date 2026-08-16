# Solutions — Count Non-Decreasing Subarrays After K Operations

## Right-to-Left Sliding Window with a Monotonic Stack

The cheapest way to make a subarray non-decreasing using increments is to raise every element up to the running maximum from the left: the minimum cost is `Σ (running_max(i) - nums[i])` over the subarray, and any other target profile costs at least as much. For a fixed left end this cost is non-decreasing as the right end grows, so for each `left` there is a farthest `right` such that every subarray `[left, r]` with `r ≤ right` is fixable within `k` — counting `right - left + 1` per left end sums exactly the answer.

The window is grown leftward, which lets a monotonic stack maintain the cost incrementally. The deque holds indices of the current running-max plateaus with values strictly decreasing from front to back; when a new `left` with value `nums[left]` arrives, every plateau with a smaller value is absorbed — its whole span of elements rises from that value to `nums[left]`, adding `(span length) · (nums[left] - old value)` to the accumulated cost — and `left` is pushed as the new front. When the cost exceeds `k`, the window is shrunk from the right: the rightmost element's cost contribution is exactly the current maximum `nums[dq[head]]` minus `nums[right]`, which is removed, advancing `head` past a plateau leader when it falls off the window.

A lazy head pointer means popped-from-the-front indices stay physically in the deque while being logically discarded, so both the absorption pops and the head advances are amortized constant — each index enters and leaves each end at most once over the whole sweep.

Edge cases: `k` may exceed any needed cost, in which case the window simply never shrinks and the answer is the full triangular count; equal adjacent values form shared plateaus (the pop condition is strict `<`), and all values fitting in 32 bits keeps the cost arithmetic exact — costs can reach ~`10⁵ · 10⁹` but stay well within 64-bit range.

**Complexity:** `O(n)` time, `O(n)` space.
