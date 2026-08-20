# Solutions — Richest Leap Route

## Monotonic Deque DP

Write `dp[i]` for the best takings achievable while standing on index `i`. The
leap that delivered you there began at some index of `i - k .. i - 1`, so
`dp[i] = nums[i] + max(dp over that stretch)`. The stretch is a window of fixed
width sliding one step at a time, and its maximum is exactly what a monotonic
deque supplies at amortised constant cost, turning an `O(n * k)` recurrence into
a single linear sweep.

The deque stores indices, kept so that their `dp` values decrease from front to
back. Reaching index `i`, first discard front indices that have fallen behind
`i - k`; whatever is at the front then holds the largest `dp` still in range, so
`dp[i]` follows immediately. Afterwards, discard back indices whose `dp` fails to
exceed `dp[i]` — while `i` remains in the window it outranks them, and it leaves
the window later — and append `i`.

![The array 2, -3, -4, 5, -6, 1 with k = 2: the dp row works out to 2, -1, -2, 4, -2, 5, and the deque snapshots show index 0 expiring at i = 3 while dp values no greater than 4 pop indices 1 and 2 off the back, leaving front 3 (4) to feed dp[5] = 5.](figures/solution-monotonic-deque.svg)

Seeding is `dp[0] = nums[0]` with the deque holding index `0` alone, and the
answer is `dp[n - 1]`. Early indices whose window would reach past the left edge
need no special handling: only indices that actually exist were ever appended.
Because every index joins the deque once and leaves it once, the sweep stays
linear no matter how wide `k` is — with `k` at `10^5` and a comparably long
array the naive recurrence would do billions of comparisons, while this one does
a few million. For `[2,-3,-4,5,-6,1]` with `k = 2` the row fills as
`2, -1, -2, 4, -2, 5`, and the final entry is the reported answer.

**Complexity:** `O(n)` time, `O(n)` space.
