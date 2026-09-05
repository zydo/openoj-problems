# Solutions — Widest Spanning Tree With Strength Doubles

## Binary search on the width, union-find feasibility

Arrangeable widths are monotone: if some spanning tree reaches width `x`,
relaxing the target below `x` keeps it valid, so the answer can be binary
searched over `[1, 200001]` — strengths top out at `10^5` and one doubling at
most doubles one. The search remembers the last feasible midpoint and returns
it.

One candidate width `x` is tested with a union-find. Required edges go in
first: any whose strength falls below `x` rejects the candidate outright, and
so does one whose endpoints are already joined — three required edges around a
triangle, say, close a cycle no spanning tree may hold, which is exactly how
the all-required example answers `-1`. Ordinary edges at strength `x` or more
then join without cost, and finally ordinary edges that clear `x` only by
doubling (`s < x <= 2s`) are unioned one at a time, each _successful_ union
spending one of the `k` upgrades; a candidate that would need more than `k`
is rejected. The candidate stands exactly when all `n` nodes share one root.

Testing the bottom candidate first cleanly splits off the `-1` case: at width
1 every edge qualifies, potentially doubled, so failure there means the
required edges conflict or the graph is simply not spannable. Each test walks
the edge list a constant number of times with near-inverse-Ackermann finds,
so the search costs about eighteen passes overall.

Worked example: `n = 4`, strengths `5, 4, 6, 2` around the cycle, `k = 2`.
Candidate `6` drops the edge of strength `2` (below 6, and doubling it gives
only 4), takes `6` free, doubles `5 → 10` and `4 → 8`, joins everything —
feasible; candidate `7` would need to double `6 → 12` and still repair `4`
(→ 8) and `5` (→ 10), three upgrades — infeasible. The width is `6`.

**Complexity:** `O(m · α(n) · log S)` time (S = 2 × 10⁵ strength bound),
`O(n)` space.
