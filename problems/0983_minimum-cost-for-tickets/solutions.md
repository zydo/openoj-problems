# Solutions — Minimum Cost For Tickets

## Dynamic programming over calendar days

Because the travel days are sorted and bounded (day values at most 365), the clean formulation lives on the calendar axis rather than on the list of days: let `dp[d]` be the minimum cost to cover every travel day up to and including day `d`. On a day you do not travel there is no decision, so the cost simply carries forward, `dp[d] = dp[d - 1]`. On a travel day `d`, the pass that covers `d` must be one of the three kinds, and a pass of duration `u` whose coverage ends on day `d` covers every travel day in the window `(d - u, d]` — so buying it on top of an optimal plan for days up to `d - u` is always a valid plan, and `dp[d]` takes the cheapest of the three options: `min(dp[max(0, d - u)] + cost for u in (1, 7, 30))`.

The `max(0, ...)` clamp handles passes that would nominally start before day 1: `dp[0]` is 0, so such a pass contributes just its own cost, which is exactly right. Since `dp` is non-decreasing (covering more days can never be cheaper), ending each pass's window exactly at the current travel day loses nothing — sliding a pass later only risks uncovering travel days.

The sweep runs over `range(1, last + 1)` where `last = days[-1]`; nothing after the final travel day matters, and the answer is `dp[last]`. A single travel day, a long gap, and a 30-day pass covering everything are all handled by the same recurrence with no special cases.

**Complexity:** `O(D)` time, `O(D)` space, where `D` is the largest travel day (at most 365).
