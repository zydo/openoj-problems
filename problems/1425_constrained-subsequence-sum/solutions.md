# Solutions — Constrained Subsequence Sum

## DP with a monotonic deque over the last k states

Let `dp[i]` be the best subsequence sum among subsequences that end exactly at index `i`. The next chosen element must lie within `k` positions back, so `dp[i] = nums[i] + max(0, dp[i-k], ..., dp[i-1])` — the `0` allows starting a fresh subsequence at `i` when every recent `dp` value is negative. The answer is the maximum `dp[i]` over all `i`, and the non-empty requirement is satisfied because every element extends at least itself.

Computing the window maximum naively costs `O(nk)`. Instead keep a deque of indices whose `dp` values are strictly decreasing from front to back. The front is always the maximum of the current window: before computing `dp[i]`, indices older than `i - k` are popped from the front; then `dp[i] = nums[i] + max(0, dp[front])`. Afterward, indices whose `dp` values are `<= dp[i]` are popped from the back — they can never again be a window maximum once `dp[i]` exists to their right — and `i` joins. Each index enters and leaves the deque at most once, making the whole sweep linear.

The `if prev < 0: prev = 0` clamp is the subtle part: without it, an all-negative array would force every subsequence to drag the least-bad predecessor along, but a subsequence may consist of a single element, so clamping negative window maxima to 0 (i.e., extending nothing) is what lets the answer be the largest single value, as in `[-1, -2, -3]`.

Edge cases: `k >= n` never evicts anything and the deque spans all previous positions; the first element has an empty deque and takes the `prev = 0` path, seeding single-element subsequences; and `best` initialized to negative infinity guarantees a non-empty result even when every `dp[i]` is negative.

**Complexity:** `O(n)` time, `O(n)` space.
