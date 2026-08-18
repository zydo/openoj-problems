# Solutions — Course Prerequisite Queries

## Topological Order With Bitset Closure

Reading each rule `[a, b]` as an arrow `a -> b` turns the whole programme into a
directed acyclic graph, and a query `[u, v]` into the question of whether `v` is
reachable from `u`. Ten thousand queries against a graph of at most a hundred
nodes makes a per-query search the wrong shape: the same walks get repeated over
and over. Instead the closure is computed once, as a table `reach` where
`reach[v]` holds every course that must come before `v`. After that a query is a
single bit test.

The table is filled by peeling the graph from its free ends. An indegree count
is kept per course and a queue is seeded with the courses no arrow enters. When
a course `u` leaves the queue, everything that had to precede it is already in
`reach[u]`, because every predecessor of `u` was peeled earlier — that is
exactly what topological order buys. So the set `u` hands on is `reach[u]`
together with `u` itself, and it is merged into `reach[v]` for each `v` that `u`
points at, dropping `v`'s indegree by one. A course whose indegree reaches zero
joins the queue. No fixpoint iteration is needed; one sweep suffices. Acyclicity
guarantees every course is peeled eventually, so no entry is left half-built.

Because `courseCount` never exceeds 100, a set of courses is at most two 64-bit
words, and merging one set into another is a couple of OR instructions rather
than a loop over elements. The precomputation therefore costs about one word of
work per edge per word of width, and answering `queries` is linear.

With the closure in hand, `[u, v]` is answered by asking whether bit `u` is set
in `reach[v]`.

**Complexity:** `O((V + E) · V / 64 + Q)` time, `O(V² / 64)` space.
