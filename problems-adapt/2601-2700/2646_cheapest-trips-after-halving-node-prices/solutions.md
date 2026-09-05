# Solutions — Cheapest Trips After Halving Node Prices

## Pass-Through Counting with a Two-State Tree DP

A trip has no routing freedom: it walks the unique path between its two
endpoints. So before any discounting, the bill is
`sum(price[i] * passes[i])`, where `passes[i]` is how many trip paths run
through node `i`, and halving node `i` knocks exactly `price[i] / 2 * passes[i]`
off that bill. The discount decision is therefore free of the routing: count
pass-throughs once, then optimize halves against the counts.

Counting needs one traversal per trip. An iterative DFS from the trip's start
builds parent links and stops the moment the destination surfaces; climbing
back from the destination along those links increments `passes` on precisely
the path nodes and halts after the start, which also copes with a trip whose
two endpoints coincide. With at most 50 nodes and 100 trips this pass is
negligible.

Choosing where to halve is independent sets on a tree. `dfs(v, p)` hands
back two numbers — the cheapest cost of `v`'s subtree with `v`'s price kept
whole (`dp0`) and with it halved (`dp1`) — seeded from `price[v] * passes[v]`
and its half. A whole node tolerates children in either state, so it absorbs
`min(c0, c1)` per child; a halved node must leave every child whole, so it
absorbs `c0` only. The better of the two values at the root is the answer —
in Example 1 the counts are `passes = [1, 3, 2, 2]` and the leaves
`0, 2, 3` (pairwise non-adjacent) are worth halving, for a bill of 22.

**Complexity:** `O(n · trips)` time, `O(n)` space.
