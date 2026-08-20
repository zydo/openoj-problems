# Solutions — Next Cheaper Price

## Monotonic Stack of Pending Discounts

Each position is settled by the first later value that is at most it — a
next-smaller-or-equal query on an array. Scanning forward per position is
easy and fits the limits, but one left-to-right sweep with a stack settles
every position in linear total time.

The stack holds indices whose partner has not appeared yet, and from bottom
to top their prices are strictly increasing. When the sweep produces a new
value, every stacked index with a price greater than or equal to it has just
met its partner: the new value is the earliest index past them that
qualifies, because anything between was already popped earlier by an
equal-or-smaller entry. Those indices come off the stack with the new value
subtracted from their price, and the new index joins to wait. On
`[7, 3, 9, 4, 10, 2]` the trailing 2 drains three pending positions in one
step — 1, 3 and 4 — before joining the stack, which is the pile-up that
makes the single sweep cheaper than per-position scans.

The result starts as a copy of `prices`, so whatever is never popped is
charged in full. Equality matters twice over. The pop test is non-strict
because an equal value does grant the discount — on `[5, 2, 2]` the second
2 settles the first 2 for a payment of 0 — and after settling others, an
entry still waits for something at most itself.

Every index is pushed exactly once and popped at most once, so the sweep is
linear even though it contains a nested loop.

**Complexity:** `O(n)` time, `O(n)` space.
