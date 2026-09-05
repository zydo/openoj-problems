# Solutions — Paths Under an Edge-Weight Cap

## Offline Queries with Union-Find

Nothing forces the queries to be answered in the order they arrive.
Answered offline, in increasing cap order, they share structure: the
edges admissible under a cap of `L` are exactly those weighing under
`L`, and that set only grows as `L` rises. Growing a connection
structure incrementally is precisely what union-find does well, so no
per-query path search is ever needed.

Sort `edgeList` by weight, sort the query _indices_ by cap, and sweep
the queries smallest-cap first while advancing one pointer over the
sorted edges: before a query is answered, every edge weighing strictly
less than its cap is merged into the disjoint-set forest (with path
halving inside `find`). The query is then one look-up — `find(p) ==
find(q)` — and because indices were sorted rather than queries, each
verdict lands back in its original slot. On Example 1, the cap-3 query
merges nothing (the lightest edge weighs exactly 3, and the test is
strict), so 0 and 1 stay apart and the verdict is `false`; by the cap-9
query, the edges weighing 3 and 7 are in, the forest spans `0-1-2`, and
the verdict flips to `true`.

Monotonicity carries correctness: an edge admitted for one cap is
admissible for every later cap, so the forest never shrinks. The loop
condition `edges[ei][2] < cap` enforces strictness at the boundary.
Duplicate edges between the same pair cost nothing — the second merge
is a no-op — and the constraints keep `p != q`, so no query compares a
root with itself.

**Complexity:** `O(E log E + Q log Q)` time, `O(n + Q)` space.
