# Solutions — Cheapest Stair Climb

## Rolling Linear DP

Let the state of step `i` be the cheapest total for standing on step `i` with
its charge paid — the cheapest way of arriving there, from a start at or
before it. Reaching `i` means hopping from `i-1` or `i-2`, so the state is
`cost[i] + min(state[i-1], state[i-2])`. The landing is entered by one last
paid hop off step `n-1` or `n-2`, so what the function returns is the better
of the final two states.

The code evaluates that recurrence in one forward sweep with two rolling
variables carrying the previous two steps' states, refreshed once per entry of
`cost`. Both begin at `0`, which is precisely the free choice of starting
step: step 0's state comes out as `cost[0] + min(0, 0)`, and step 1's `min`
can pick up the `0` and ignore the hop from step 0 — a fresh start. The final
`min` of the two rolling variables equals `min(dp[n-1], dp[n-2])` in the
backwards formulation `dp[i] = cost[i] + min(dp[i+1], dp[i+2])` anchored by
`dp[n] = 0`.

Nothing array-shaped is ever stored, and every charge is read exactly once.
The minimum input, two steps, needs no special case — its answer is the
cheaper step taken as a fresh start.

**Complexity:** `O(n)` time, `O(1)` space.
