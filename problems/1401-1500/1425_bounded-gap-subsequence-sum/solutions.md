# Solutions — Bounded Gap Subsequence Sum

## DP with a monotonic deque over the last k states

Write `dp[i]` for the best sum of a legal pick whose rightmost chosen position
is `i`. That pick either consists of `nums[i]` alone, or it continues a pick
ending at one of the `k` positions to the left — the best of them. So

```text
dp[i] = nums[i] + max(0, dp[i-k], ..., dp[i-1])
```

where the `0` covers "continue nothing", i.e. start over at `i` when every
recent predecessor is negative. The answer is the largest `dp[i]`, and it is
never empty because each element at least forms a pick by itself.

Reading the window maximum straight out of the array costs `O(nk)`. A deque of
positions ordered by strictly decreasing `dp` value makes it constant: expire
positions older than `i - k` off the front, read the front as the maximum,
then push `i` after popping every tail entry whose value is `<= dp[i]` — those
can never win a window again with `i` to their right. Every position enters and
leaves once, so the sweep is linear.

Clamping the window maximum at zero is what handles all-negative input: a pick
may be a lone element, so dragging a negative predecessor along is always a
mistake, and Example 3 correctly lands on the single `-2`.

Example 1 (`nums = [8, 3, -9, 4, 15]`, `k = 2`) rolls the deque:

1. `i = 0`: `dp[0] = 8`, deque `[0]`.
2. `i = 1`: front value 8 gives `dp[1] = 3 + 8 = 11`; 11 evicts 8, deque `[1]`.
3. `i = 2` (-9): `dp[2] = -9 + 11 = 2`; too small to evict, deque `[1, 2]`.
4. `i = 3` (4): the window maximum is 11, `dp[3] = 15`; evicts both, deque `[3]`.
5. `i = 4`: `dp[4] = 15 + 15 = 30` — the pick `8, 3, 4, 15`.

`k >= n` expires nothing and the deque spans everything seen so far; the first
position finds an empty deque and takes the zero path. `best` starts at
negative infinity so an all-negative array still returns an element.

**Complexity:** `O(n)` time, `O(n)` space.
