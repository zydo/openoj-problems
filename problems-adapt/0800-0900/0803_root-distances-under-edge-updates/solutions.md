# Solutions — Root Distances Under Edge Updates

## Euler Tour + Fenwick Tree

Between the root and any node of a tree there is exactly one route, so the
only way a distance can move is through a weight rewrite. Setting the weight
of edge `(u, v)` from `w` to `w'` slides every node in the subtree hanging
under the deeper endpoint by the same delta `w' - w` and touches nothing
else — which is the whole insight, because a subtree can be made contiguous.

An Euler tour does that: an iterative DFS stamps each node with entry and exit
times `tin`/`tout`, and the subtree of any node occupies the index range
between them. Initial distances come out of the same DFS, stored in
`base[x]`. Laid over the Euler order, a Fenwick tree with range-add /
point-query turns a rewrite into two point updates — `delta` at
`tin[child]`, `−delta` at `tout[child] + 1` — where `child` is whichever of
`u`, `v` has the other as its parent. An asking query for node `x` then reads
`base[x]` plus the prefix sum up to `tin[x]`, which gathers precisely the
deltas of ancestor edges rewritten so far.

In the chain example (`1 - 2 - 3 - 4 - 5 - 6` with weights `3, 2, 7, 1, 4`),
shrinking edge `(3,4)` from 7 to 2 adds `−5` over the Euler range of the
subtree rooted at 4, so distances to 4, 5, and 6 fall by 5 (12 → 7, 13 → 8,
17 → 12) while nodes 2 and 3 keep theirs.

The DFS runs on an explicit stack with enter/exit records, so a `10^5`-deep
chain cannot overflow recursion, and the Fenwick array is sized `n + 2` since
`tout` reaches `n`. A distance asked at the root reads `base[1] + 0 = 0`:
no child-side range can cover the root's own index.

**Complexity:** `O(n + q log n)` time, `O(n)` space.
