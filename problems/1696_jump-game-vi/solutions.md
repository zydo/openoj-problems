# Solutions — Jump Game VI

## Monotonic Deque DP

Let `dp[i]` be the maximum score reachable at index `i`. Since the last hop into `i` starts somewhere in `[i − k, i − 1]`, the recurrence is `dp[i] = nums[i] + max(dp[i − k .. i − 1])` — a sliding-window maximum, which a monotonic deque answers in amortized constant time per step.

The deque holds indices with strictly decreasing `dp` values. Before computing `dp[i]`, pop stale indices from the front whose position falls outside the window (`< i − k`); the front is then exactly the window's maximum. After computing `dp[i]`, pop indices from the back whose `dp` is not strictly greater than the new value — they can never be a window maximum again while `dp[i]` is alive — and push `i`. The `<=` comparison also keeps the deque short when equal scores occur.

The whole array is processed once with each index pushed and popped at most once, so the sweep is linear even though the jump range `k` can be large. `dp[0]` is seeded with `nums[0]` and the deque starts containing only index 0; for early indices whose window is truncated at the left edge, the front-stripping naturally leaves the valid prefix. The answer is `dp[n − 1]`.

**Complexity:** `O(n)` time, `O(n)` space.
