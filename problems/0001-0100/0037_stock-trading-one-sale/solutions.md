# Solutions — Stock Trading, One Sale

Two ways past the all-pairs search. Both observe that a trade is fixed by one
fact about each of its ends — the cheapest price up to the buy, the dearest
price from the sell — and that both facts are one-sweep computations. The
split method keeps the two ends apart — a backward pass tabulates the best
sale price still to come from every day, a forward pass carries the cheapest
price already passed, and every trade is priced at the seam between its
purchase side and its sale side. The one-pass sweep folds them into a single
left-to-right pass instead: carry the running minimum and let each day offer
one candidate.

## Prefix Minimum, Suffix Maximum

A trade is two days, and the day between them is enough to name it. Fix a
seam `i`: any purchase on or before `i` pairs legally with any sale strictly
after it, because the two sides of the seam cannot collide. The best trade
crossing that seam buys the prefix's cheapest price and sells the suffix's
dearest, and scoring that pair at every seam misses nothing — a trade bought
on day `b` is scored at `i = b`, where the prefix minimum is at most its
purchase price and the suffix maximum at least its sale price.

The suffix half is tabulated by one backward pass: `best_sale[i]` is the
larger of `prices[i]` and `best_sale[i + 1]`, seeded from the last day. The
prefix half needs no table — the forward pass carries `cheapest` through day
`i` and scores `best_sale[i + 1] - cheapest`, keeping the largest. `best` is
seeded at `0`, the profit of standing aside, so a list that never rises, or a
one-day list whose forward loop is empty because no strictly later day
exists, returns 0 without special handling.

Walk `[6, 2, 7, 1, 5]`: the backward pass writes best-sale-from-here as
`[7, 7, 7, 5, 5]`; the seams then score 6 against 7, 2 against 7, 2 against
5 and 1 against 5, and the largest candidate, 5, is buy at 2, sell at 7 — the
same answer the running minimum finds.

The extra table is the whole difference in cost: the future is written down
once so the forward pass can consult it, where the one-pass sweep gets by
asking each day only about the past.

**Complexity:** `O(n)` time, `O(n)` space.

## One Pass with a Running Min

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
