# Solutions — Minimum Moves to Balance Circular Array

Because at most one person starts with a negative balance, the problem
collapses to a single sink with demand equal to the deficit, fed by every
positive balance acting as a supply. A unit moved from person `i` to the
debtor travels along the circle and costs exactly one move per edge, so
each unit's cheapest route is the shorter of the two arcs — the circular
distance `min(|i - neg|, n - |i - neg|)`. Feasibility is decided up front:
if the total sum is negative the deficit can never be covered (return
`-1`), and with no negative person the answer is `0`.

## Greedy by distance

Collect every positive person as a `(distance, value)` source against the
single negative index, sort by distance, and drain the closest sources
first: for each source, send `min(value, remaining deficit)` units,
charging `take * distance` moves. An exchange argument justifies the order
— if a nearer source still has supply while a farther one is used, swapping
the two units can only lower the cost, and since there is no capacity on
edges the two arcs never interfere.

The total sum and the accumulated move count both need 64-bit arithmetic:
with `balance[i]` up to `10⁹` and a circle of length `10⁵`, the answer can
reach `10⁹ · 5 · 10⁴ = 5 · 10¹³`, beyond 32-bit integers (though still
well within JavaScript's exact-integer range `2⁵³`).

**Complexity:** `O(n log n)` time, `O(n)` space.
