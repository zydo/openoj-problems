# Solutions — The Cheapest Way To Cover Two Quotas

Every purchase decomposes into interchangeable units: a type 1 item buys
one unit of quota 1, a type 2 item one unit of quota 2, and a
joint item one unit of each at a single price. No purchased unit changes
what any other unit is worth, so the answer should decompose into
independent per-unit choices — and it does.

## Per-Unit Greedy Pricing

Split the quotas into `min(need1, need2)` paired units, which count
toward both quotas at once, plus the `|need1 - need2|` leftover
units of the larger quota. A paired unit is delivered either by one
joint item (`costBoth`) or by one item of each type (`cost1 + cost2`), so
its price is `min(costBoth, cost1 + cost2)`. A leftover unit is delivered
by its own type's item or by a joint item whose spare contribution is
wasted, so its price is `min(costBoth, costX)` — a both-item can
impersonate a single. Summing the per-unit prices is the answer.

Independence holds because the plan space is one-dimensional. If `c` type
3 items are bought, the optimal completion costs `c·costBoth + max(0,
need1 - c)·cost1 + max(0, need2 - c)·cost2`, a convex piecewise-linear
function of `c` whose slope changes only at `min(need1, need2)` and
`max(need1, need2)` — so an optimum sits at one of the three regimes
`c = 0`, `c = min(need1, need2)`, `c = max(need1, need2)`. The per-unit
pricing arbitrages exactly those regimes: pairs plus singles, pure singles,
or all joint items with overshoot on the smaller need. Whichever per-unit
comparison wins, the formula lands on the cheapest regime.

The arithmetic is closed-form. Needs reach `10⁹` against costs of `10⁶`,
so products reach `10⁹ · 2 · 10⁶ = 2 · 10¹⁵` — past the 32-bit range, so
Java, C++, Go and Rust accumulate in 64-bit integers while Python is
unbounded; every value stays below `2 · 10¹⁵`, comfortably inside the
`2⁵³` range where JavaScript and TypeScript numbers are exact.

**Complexity:** `O(1)` time, `O(1)` space.
