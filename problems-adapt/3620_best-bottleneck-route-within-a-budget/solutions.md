# Solutions — Best Bottleneck Route Within a Budget

## Binary search on the bottleneck plus a DAG cost sweep

A route's bottleneck is its cheapest edge, so a candidate `S` is attainable
exactly when some budget-feasible route from `0` to `n - 1` uses only edges
of cost at least `S`. Attainability is monotone — lowering `S` only adds
edges — so the sorted distinct edge costs can be binary-searched for the
largest attainable `S`. Checking `S = 0` first (every edge allowed) and
failing means no qualifying route exists at any bottleneck, and `-1` comes
back.

Each check is a shortest-cost sweep over the DAG. A topological order is
computed once by Kahn's algorithm and reused; `dist[u]` is relaxed in that
order using only edges of cost at least `S`, skipping both unavailable
sources and unavailable targets so unusable nodes never propagate. The
candidate is attainable when `dist[n - 1] <= k`, and minimizing the total
cost per threshold is the right witness: if the cheapest restricted route
exceeds the budget, no restricted route fits.

Worked example: the diamond of Example 1 with budget `12`. At `S = 5` the
edges `4` and... the left route dies immediately (its edge of cost `4` is
below `S`), and the right route `0 -> 3 -> 4` costs `5 + 7 = 12 <= 12`, so
`S = 5` is attainable. At `S = 6` the edge of cost `5` also vanishes and no
route remains, so the answer is `5`.

Costs up to `10⁹` and `k` up to `5 × 10¹³` fit in 64-bit integers, and each
check is one linear pass over the topological order. An empty edge list falls
through the `S = 0` check unless source and sink coincide, and the
distinct-cost sort keeps the search range tight under duplicate weights.

**Complexity:** `O((n + m) log m)` time, `O(n + m)` space.
