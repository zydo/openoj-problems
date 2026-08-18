# Solutions — Stock Trading, One Sale

## Running minimum, one sweep

Fixing the sale day pins down the question: what was the cheapest price on
that day or any day before it? Selling that day against that cheapest earlier
price is the single best trade ending there, so the answer is the largest of
these per-day candidates — and the candidates can all be produced in one
left-to-right sweep that carries the minimum as it goes.

The method keeps `best` seeded at `0`, the profit of standing aside, and
`min_price` seeded from the first day. Each new price either undercuts
`min_price` — it becomes the new floor — or produces the candidate
`price - min_price`, kept when it beats `best`. The `elif` is deliberate: on
a day that sets a new floor, selling against the floor can only lose money,
and `best` never drops below zero, so skipping the comparison loses nothing.
Buy-before-sell is automatic because the floor is always drawn from the
current day or earlier ones.

Walk `[6, 2, 7, 1, 5]`: day 6 sets the floor at 6; day 2 lowers it to 2; day
7 yields the candidate 5; day 1 lowers the floor again; day 5 yields only 4.
The answer is 5. A list that never rises — `[8, 6, 6, 3]` — never improves on
its seed, and a one-day list has no candidate at all; both return 0 with no
special handling.

**Complexity:** `O(n)` time, `O(1)` space.
