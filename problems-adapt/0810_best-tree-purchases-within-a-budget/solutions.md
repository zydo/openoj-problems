# Solutions — Best Tree Purchases Within a Budget

## Tree knapsack with two discount profiles

Whether a node can pay half price is decided by its direct parent alone, so
every node needs two budget profiles: `f[u][b]`, the best gain reachable in
`u`' subtree spending at most `b` when `u`'s parent was not bought (`u` would
pay in full), and `g[u][b]`, the same when the parent was bought (`u` may pay
`floor(price[u] / 2)`). Two profiles are enough because a grandchild's
discount depends on `u` itself, which the profiles already track.

Children are folded together by a bounded knapsack convolution: each merge
spends `t` inside one child against every budget level `b` of the accumulated
result, keeps the maximum, then runs a prefix maximum so that leftover budget
never hurts. Both of `u`'s tables begin from the merged `f` arrays of the
children — if `u` stays unbought, no child earns a discount — after which
`f[u]` may additionally buy `u` at `price[u]`, reading the children's merged
`g` arrays, and `g[u]` may buy at `price[u] // 2` the same way.

Nodes are evaluated in reverse BFS order, so children are final before their
parent and nothing recurses. The answer is `f[root][budget]`: the root has no
parent and so never qualifies for a discount.

Worked example: the chain `1 → 2 → 3` with `price = [6,2,7]`,
`reward = [10,5,11]`, `budget = 10`. Leaf 3's `g` profile buys at
`floor(7/2) = 3` for a gain of 8, its `f` profile buys at 7 for 4. Node 2
merges nothing (one child); its `g` buys at `floor(2/2) = 1`, gains 4, and
reads the child's `g` — total 12 — while its `f` buys at 2 for 3 and reads the
child's `f` — total 7. Node 1, unbought, would see the child's `f` of 7;
bought at 6 it gains 4 and sees the child's `g` of 12, spending 6 + 1 + 3 = 10
within budget for a final `4 + 12 = 16`.

With `n`, `budget ≤ 160` and prices at most 50, each merge costs `O(B²)` in
the budget dimension — cheap next to the `n` merges that dominate.

**Complexity:** `O(n · B²)` time (B = budget), `O(n · B)` space.
