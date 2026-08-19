# Solutions — Least Time to Clear Every Job

## Binary Search on the Answer

The answer is monotone: if the whole queue fits inside `t` minutes, it fits
inside any larger budget, since workers can idle. So the least feasible time
is a natural binary-search target over `[1, min(factors) * jobs^2]`, with the
upper bound being what the single best worker needs to do every job alone.

The feasibility check fixes `t` and asks whether the crew's combined
capacity reaches `jobs`. A worker with factor `r` completes `n` jobs in
`r * n^2` minutes, so within `t` it finishes exactly `isqrt(t // r)` of
them. Summing capacities across `factors` and comparing against `jobs`
decides the check in one linear pass, exiting early once the running total
covers the demand.

The search keeps the invariant that the least feasible time lies in
`[lo, hi]` and halves the interval until it collapses to a single value.
With `min(factors) * jobs^2` reaching `10^14`, the loop runs about 47
iterations of an `O(n)` scan, and nothing beyond a few counters is stored.

Worked on Example 3, `factors = [2,2,4]`, `jobs = 10`: at `t = 32` the two
fast workers each finish `isqrt(16) = 4` jobs and the slow one 2 — 10 in
total — while at `t = 31` they manage only `3 + 3 + 2 = 8`, so 32 is the
least feasible deadline.

**Complexity:** `O(n log(min(factors) * jobs^2))` time, `O(1)` space.
