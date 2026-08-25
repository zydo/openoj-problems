# Solutions — Minimum Operations to Make the Array Beautiful

## Divisor-linked value DP

Position 0 is frozen at `nums[0]` — only indices `i > 0` may be incremented —
so every later value must be a multiple of the value chosen just before it.
The whole chain is therefore nondecreasing, and the search can live on the
value axis: keep `dp[v]`, the cheapest cost to finish the processed prefix
with the current last position set to `v`, and advance through the remaining
targets one by one.

The bound that makes the axis finite is an exchange argument. If a position
already carries `u >= x` (its target `x`), holding it at `u` is never worse
than raising it — any later value divisible by the raised value is already
divisible by `u`, so the extra increments are pure waste. If instead
`u < x`, the smallest multiple of `u` that reaches `x` is
`ceil(x / u) * u < u + x <= 2 * max(nums)`. So no optimal chain ever needs a
value above `2 * max(nums)`; cap the axis there. Transitioning from `u` to
the next target `x` writes `new_dp[v] = dp[u] + (v - x)` at every multiple
`v` of `u` with `v >= x`, and the answer is the smallest `dp` value after
the last element has been folded in.

**Complexity:** `O(n · C log C)` time with `C = 2 * max(nums)` (at most 100
under the constraints), `O(C)` space.
