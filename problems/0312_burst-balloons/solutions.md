# Solutions — Burst Balloons

## Interval DP on the Last Balloon Burst

Thinking about the _first_ balloon to burst is hopeless: after it pops, the neighbors change and the subproblems overlap in messy ways. The canonical solution reverses the question and asks which balloon is the _last_ to burst in an interval. At that moment every balloon inside has already gone, so the last balloon's coin gain depends only on the two balloons immediately bounding the interval — values that never change while the interval is being solved. This is what makes the subproblems independent.

The array is padded with a virtual 1 on each end so boundary bursts need no special casing. `dp[left][right]` is defined over the _open_ interval `(left, right)`: the maximum coins from bursting every balloon strictly between indices `left` and `right`, assuming those two boundary balloons are still present. Trying every `k` in the interval as the last burst gives the recurrence: gain `padded[left] * padded[k] * padded[right]` for `k` itself, plus `dp[left][k]` and `dp[k+1, right]` for the two sides, which burst entirely before `k` and are unaffected by it.

The table is filled by increasing interval length, from length 1 up to the full interior, so both subintervals are always ready when a larger interval needs them. The answer is `dp[1][m-2]`, the open interval between the two padding balloons — bursting everything inside with the virtual 1s as permanent boundaries.

Edge cases: a single balloon `[x]` pads to `[1, x, 1]` and the single-length interval yields `x`; the `0` values allowed by the constraints contribute nothing when burst and are handled by the same arithmetic. With `n ≤ 300` the triple loop is at most about 2.7 · 10⁷ inner steps.

**Complexity:** `O(n³)` time, `O(n²)` space.
