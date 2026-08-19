# Solutions — Least Total Travel to Capacitated Stops

## Contiguous-Block DP over Sorted Positions

Plans that cross waste distance: if a left unit is sent to a right stop while
a right unit heads to a left stop, swapping the two targets never raises the
sum, by the triangle inequality. Uncrossing repeatedly leaves an optimal plan
in which — with units and stops both sorted — every stop serves a consecutive
run of units, and the runs appear in the same order as the stops.

That structure turns the task into a partition problem. Write `dp[i]` for the
least total cost of serving the first `i` sorted units with the stops handled
so far; it begins finite only at `i = 0`. Admitting a stop at `pos` with
capacity `limit` means deciding how many of the trailing units it takes: for
each `t` from 1 to `min(limit, i)`, the stop absorbs units `i-t .. i-1` at the
cost of their distances to `pos`, on top of `dp[i-t]`. Carrying `dp[i]`
forward unchanged encodes serving nobody at this stop, so empty stops stay
legal — including stops whose limit is zero. After the last stop, `dp[n]` is
the answer.

Each stop precomputes `pref[i]`, the prefix sums of `|unit[j] - pos|` over the
sorted units, so scoring a block is one subtraction: `pref[i] - pref[i-t]`.
Sorting is what makes those differences meaningful — a stop's block is
exactly the units adjacent to it in position, the non-crossing shape again.

Both dimensions are bounded by 100, so the triple loop — stops times prefix
length times largest limit — is at most on the order of ten million primitive
steps, and the rolling table keeps memory linear. Distances can reach `10^9`
per unit, which Python's integers hold exactly and the 64-bit return type
carries everywhere.

**Complexity:** `O(m·n·L)` time, `O(n)` space.
