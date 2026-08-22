# Solutions — Fewest Reroutes to Connect the Graph

## Union-Find Component Counting

Wiring `n` nodes into one cluster takes at least `n − 1` links, so a link
count below that means the answer is −1 right away. In the other direction
the counting argument closes completely: a cluster of `s` nodes must contain
at least `s − 1` links (its own spanning tree), so whenever two or more
clusters remain, some link inside a cluster is beyond its spanning tree —
spare — and one reroute of it joins two clusters. Each reroute lowers the
cluster count by exactly one, so the minimum number of reroutes equals
(clusters − 1).

The code counts clusters with union-find under path halving
(`parent[x] = parent[parent[x]]` on the way up). Start the counter at `n` and
process every link: when its two endpoints have different roots, merge them
and decrement; when the roots already agree, the link is redundant and the
cluster count does not move — exactly the spare link the argument above
relies on.

Walking the second example, `n = 6` with
`[[0,1],[0,2],[0,3],[1,2],[2,3]]`: the counter falls 6 → 5 → 4 → 3 across the
first three links, then `1-2` and `2-3` both land inside the merged cluster
and change nothing. Three clusters remain, so the answer is `3 − 1 = 2`, and
the two redundant links are precisely the two that get rerouted.

The final `clusters − 1` is right at both extremes: an already-connected
wiring needs 0 reroutes, and the single-node input trivially so.

**Complexity:** `O((n + m) · log n)` time, `O(n)` space, where `m` is the
number of links.
