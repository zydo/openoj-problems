# Solutions — Lowest Component Cost After Splitting

## Threshold search with union-find counting

Fix a candidate threshold `t` and keep exactly the edges of weight at most
`t`. Counting components with a union-find over those edges — starting from
`n` singletons, one merge per edge whose endpoints were separate — yields
exactly the finest split reachable while spending at most `t` per edge: any
further deletion only raises the count. So `t` is workable precisely when the
count is at most `k`, and workability is monotone in `t` because raising the
threshold adds edges and merges components. Since nothing changes between
consecutive weights, the answer is either `0` or one of the distinct edge
weights, and a binary search over the sorted distinct weights finds the
smallest workable one.

Two shortcuts guard the ends. When `k` is at least `n`, every node may stand
alone and `0` comes back immediately. Otherwise, testing threshold `0` —
which keeps nothing, all weights being at least 1 — covers the case where
even the edgeless split fits inside `k` components and also answers `0`.
Otherwise the lo/hi narrowing over index space converges on the smallest
feasible weight.

Worked example: the five-node tree with weights `[[0,1,6],[1,2,4],[1,3,3],[3,4,7]]`
and `k = 2`. Threshold `4` keeps only `4` and `3`, splitting into
`{0}, {1,2,3}, {4}` — three pieces, one too many. Threshold `6` also keeps
the `6`-edge, merging `{0}` back in: two pieces, so `6` is the answer.

Each check is a single pass over the edges with path-halving finds, so the
sort plus the log-many checks dominates. The input graph is promised
connected, but nothing in the computation needs that beyond the counting.

**Complexity:** `O(m log m + m · α(n) · log m)` time, `O(n + m)` space.
