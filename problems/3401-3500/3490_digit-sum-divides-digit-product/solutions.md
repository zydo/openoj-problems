# Solutions — Digit Sum Divides Digit Product

## Digit DP over Sum and Product

Let `f(x)` count the qualified numbers up to `x`; the range answer is
`f(r) - f(l - 1)`. Build `x`'s decimal digits one position at a time. Nothing
about a half-built number matters for the final verdict except its digit sum
`ssum`, its digit product `prod`, and two flags, so the recursion carries
exactly that state: `(pos, tight, started, ssum, prod)`. `tight` says the
prefix chosen so far matches `x` digit for digit, which caps the next choice at
`x`'s digit there instead of 9; `started` says a nonzero digit has been placed,
which is what keeps leading zeros out of both accumulators. Memoizing the full
state lets each reachable state be evaluated once per bound.

Zeros cut both ways and the recursion handles each direction. A `0` among the
significant digits multiplies `prod` down to 0 — and 0 is a multiple of any
positive digit sum, which is why 30 and 40 qualify in the examples — while
`ssum` keeps growing. A leading zero is the other case entirely: the unstarted
branch holds the accumulators at `ssum = 0, prod = 1` so nothing is
contaminated. At the last position a state tallies exactly when the number
truly started, `ssum > 0`, and `prod % ssum == 0`; single-digit numbers pass
because their product and sum coincide.

The state space is small: at most 10 positions, two values each for `tight` and
`started`, digit sums bounded by 81, and the products reachable from digits
1–9 across at most 10 positions — a few thousand distinct values in all. The
memo lives inside the per-bound helper, so it is rebuilt from scratch for `r`
and for `l - 1`; that separation is not optional, since the `tight`
transitions depend on which bound's digits are being matched.

Edge cases worth checking by hand: the lower call with `l = 1` (its `l - 1 = 0`
short-circuits to 0), one-digit ranges where every number qualifies, and
zero-carrying numbers like 220 (sum 4, product 0), which the DP admits through
the ordinary multiply.

**Complexity:** `O(D * S * P)` time and space per bound — `D <= 10` digit
positions, `S <= 91` reachable sums, `P` the reachable products (a few
thousand) — with each state looping over at most 10 digits.
