# Solutions — Cutting a Tree Into Equal-Sum Parts

## Divisor enumeration with subtree-sum counting

If the tree is cut into `k` parts of equal worth, each part must be worth
`total / k`, so `k` has to divide the combined value of all nodes. In the
other direction, a candidate worth `v = total / k` admits a `k`-part split
exactly when precisely `k` nodes have a subtree sum divisible by `v`. Forward
direction: the topmost node of any part owns a subtree that decomposes into
whole parts — nothing below it can cross the cut above it — so its subtree
sum is a multiple of `v`, while any other node's subtree holds a proper,
nonempty slice of its own part, worth strictly between 0 and `v`, which
breaks divisibility. The reverse direction is the matching greedy:
accumulating sums from the leaves up and cutting whenever the running total
reaches `v` succeeds exactly when those `k` divisible nodes exist.

Rooting the tree at node 0, one iterative DFS yields a visitation order
whose reverse is a post-order, and a single backward sweep over it gathers
every subtree sum in `O(n)`. Trial division up to `sqrt(total)` lists the
divisors, each contributing both `d` and `total / d`. Candidates are then
tried from the most parts (maximizing removed joins, `k - 1`) down to one,
returning the first that validates.

Two guards keep the check honest. A candidate worth below the single largest
node value is rejected outright, since no part can absorb a node worth more
than the target. And the acceptance test counts subtree sums divisible by
`v` and demands exactly `k` — a count above `k` means the divisible nodes
overlap inside fewer than `k` realizable parts, so that split does not exist.

**Complexity:** `O(sqrt(S) + n·d(S))` time, `O(n)` space — `S` the combined
node value and `d(S)` its divisor count.
