# Solutions — Minimum Minutes to Finish the Jobs

## Binary search on the finishing minute

By minute `t`, worker `i` has completed exactly `t // cycles[i]` jobs — it
starts at minute 0 and every job runs the full `cycles[i]` minutes — so the
workforce total is the floor-division sum over the array. That total steps
upward as `t` grows and never falls back, which is precisely the property
binary search feeds on: sweep a candidate minute, ask whether the floor-sum
has reached `quota`, and keep the first minute that answers yes.

The search interval is `[1, min(cycles) · quota]`. The fastest worker alone
could run every job of the quota back to back inside that bound, so the
answer cannot exceed it; the lower-bound pattern (`hi = mid` when the quota
is met, `lo = mid + 1` otherwise) walks the interval down to the earliest
feasible minute.

For `cycles = [2, 3, 4]` with `quota = 7`, minute 7 yields
`3 + 2 + 1 = 6` and minute 8 yields `4 + 2 + 2 = 8`; the search lands on 8.
Nothing is simulated — jobs queueing back to back on each worker is exactly
what the floor-division already counts.

Each feasibility check is one pass over the array, and the interval of up to
`min(cycles) · quota` candidates halves per round — about 47 rounds at the
constraint limits, where the product reaches 10¹⁴. The working set is a
handful of scalars.

**Complexity:** `O(B log(min(cycles) · quota))` time, `O(1)` space, where
`B` is the number of workers.
