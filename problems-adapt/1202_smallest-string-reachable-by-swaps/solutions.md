# Solutions — Smallest String Reachable by Swaps

## Union-find with per-cluster sorting

A swap runs along an edge, but edges compose: if `a` trades with `b` and `b`
with `c`, then `a` and `c` can trade through `b`, and by induction any two
positions in one connected cluster can exchange letters. A cluster therefore
keeps its letters as a multiset while their arrangement is entirely free —
and the smallest string that freedom buys puts each cluster's smallest
letters at its smallest positions.

Union-find builds the clusters. Every pair merges two positions, with `find`
doing path halving (`parent[x] = parent[parent[x]]`) to hold the trees flat.
A second sweep groups positions by root; because it scans positions in
increasing order, every group's index list emerges already sorted. Each
group's letters are then collected, sorted, and written back smallest-first —
`"topaz"` with the chain 0–1–2 gathers `t, o, p`, sorts them to `o, p, t`,
and writes `"optaz"`, while `a` and `z`, belonging to no pair, wait in
singleton groups and pass through untouched.

Clusters never interact — no swap crosses between two of them — so sorting
each independently is optimal for the whole string at once. With `n`
positions and `p` pairs, the union pass costs effectively linear time
(inverse-Ackermann finds) and the per-cluster sorts total at most
`O(n log n)`.

**Complexity:** `O(n log n + p · α(n))` time, `O(n)` space.
